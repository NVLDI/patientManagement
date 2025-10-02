import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, ScrollView, StyleSheet,
  TouchableOpacity, Alert, Platform, Image
} from 'react-native';
import { generateClient } from 'aws-amplify/api';
import {
  getCurrentUser, signOut, fetchAuthSession
} from 'aws-amplify/auth';
import {
  createClinic, deleteClinic, updateClinic, createClinicInfrastructure
} from '../../mutations';
import { listClinics } from '../../queries';
import { Ionicons } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import CloudMetricsScreen from './MetricsDashboard/CloudMetricsScreen';
import Footer from './Footer/Footer';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports'; // adjust path
Amplify.configure(awsExports);

const screenWidth = Dimensions.get('window').width;
const isLargeScreen = Platform.OS === 'web' && screenWidth >= 768;
const client = generateClient();

export default function SuperDashboardScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [clinics, setClinics] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [search, setSearch] = useState('');

  const filteredClinics = clinics.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  const fetchClinics = async () => {
  try {
    console.log('📡 Fetching clinics...');

    // Get current user and groups
    const user = await getCurrentUser();
    const session = await fetchAuthSession();
    const idToken = session.tokens?.idToken;
    const groups = idToken?.payload['cognito:groups'] || [];
    console.log('👥 User Cognito groups:', groups);

    const result = await client.graphql({ query: listClinics, authMode: 'userPool' });

    if ('data' in result && result.data?.listClinics?.items) {
      console.log('✅ Clinics fetched:', result.data.listClinics.items);
      setClinics(result.data.listClinics.items);
    } else {
      console.warn('⚠️ No clinics found or not authorized');
      setClinics([]);
    }

  } catch (err: any) {
    // Check if error is unauthorized
    if (err.errors?.some(e => e.errorType === 'Unauthorized')) {
      console.error('🚫 User not authorized to access listClinics');
      Alert.alert(
        'Access Denied',
        'You do not have permission to view clinics. Please contact your admin.'
      );
    } else {
      console.error('❌ Error fetching clinics:', err);
    }
  }
};


  useEffect(() => {
    fetchClinics();
  }, []);

  useEffect(() => {
    const loadSession = async () => {
      try {
        const user = await getCurrentUser();
        const session = await fetchAuthSession();
        const idToken = session.tokens?.idToken;

        if (idToken) {
          const payload = idToken.payload;
          console.log('✅ Logged in as:', payload['cognito:username']);
          console.log('📧 Email:', payload['email']);
          console.log('👥 Cognito groups:', payload['cognito:groups']);
          setAdminEmail(payload['email']);
        }
      } catch (err) {
        if (err.name === 'UserUnAuthenticatedException') {
          console.warn('🚫 User is not logged in. Redirecting...');
          Alert.alert('Session expired', 'Redirecting to login...');
          navigation.navigate('SuperLogin');
        } else {
          console.error('❌ Failed to fetch session:', err);
        }
      }
    };

    loadSession();
  }, []);

  const handleLogout = async () => {
  try {
    await signOut();
    console.log('🔓 Logged out');

    // Reset navigation immediately
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'SuperLogin' }],
      })
    );

    // Optionally: show alert *after* redirection
    setTimeout(() => {
      Alert.alert('Logged out', 'You have been successfully logged out.');
    }, 300);

  } catch (err) {
    console.error('❌ Logout failed:', err);
    Alert.alert('Logout Error', 'Failed to logout.');
  }
};
useEffect(() => {
  const loadSession = async () => {
    try {
      const session = await fetchAuthSession();
      if (!session.tokens?.idToken) throw new Error("No session");
    } catch (err) {
      console.warn('🚫 Session expired. Redirecting...');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'SuperLogin' }],
        })
      );
    }
  };
  loadSession();
}, []);

  const handleCreateClinic = async () => {
    try {
      console.log('📝 Creating clinic:', { name, email });
      const result = await client.graphql({
        query: createClinic,
        variables: { input: { name, email } },
        authMode: 'userPool'
      });

      if (result.data?.createClinic) {
        console.log('✅ Clinic added to DB:', result.data.createClinic);

        const lambdaResult = await client.graphql({
          query: createClinicInfrastructure,
          variables: { input: { name, email } },
          authMode: 'userPool'
        });

        if (lambdaResult.data?.createClinicInfrastructure) {
          console.log('✅ Clinic infrastructure created:', lambdaResult.data.createClinicInfrastructure);
        } else {
          console.error('❌ Clinic infrastructure failed:', lambdaResult);
        }

        setName('');
        setEmail('');
        fetchClinics();
        Alert.alert('Success', 'Clinic created successfully.');
      }
    } catch (err) {
      console.error('❌ Error in handleCreateClinic:', err);
      Alert.alert('Error', 'Failed to create clinic.');
    }
  };

  const handleDeleteClinic = async (id) => {
    try {
      console.log('🗑️ Deleting clinic:', id);
      const result = await client.graphql({
        query: deleteClinic,
        variables: { input: { id } },
        authMode: 'userPool'
      });

      if (result.data?.deleteClinic) {
        console.log('✅ Clinic deleted:', result.data.deleteClinic);
        fetchClinics();
      }
    } catch (err) {
      console.error('❌ Error deleting clinic:', err);
      Alert.alert('Error', 'Failed to delete clinic');
    }
  };

  const handleUpdateClinic = async () => {
    if (!editingId) return;
    try {
      console.log('✏️ Updating clinic:', editingId, editName, editEmail);
      const result = await client.graphql({
        query: updateClinic,
        variables: {
          input: {
            id: editingId,
            name: editName,
            email: editEmail
          }
        },
        authMode: 'userPool'
      });

      if (result.data?.updateClinic) {
        console.log('✅ Clinic updated:', result.data.updateClinic);
        setEditingId(null);
        fetchClinics();
      }
    } catch (err) {
      console.error('❌ Error updating clinic:', err);
      Alert.alert('Error', 'Failed to update clinic');
    }
  };

  return (
    <View style={styles.pageContainer}>
       <View style={styles.headerFixed}>
    <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Super Admin Dashboard</Text>
          <View style={styles.headerRight}>
            <View style={styles.headerRow}>
              <View style={styles.avatarContainer}>
                <Image
                  source={{ uri: `https://ui-avatars.com/api/?name=${adminEmail}&background=6c757d&color=fff` }}
                  style={styles.avatar}
                />
              </View>
              <Ionicons name="notifications-outline" size={22} color="#fff" style={{ marginRight: 12 }} />
              <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Ionicons name="log-out-outline" size={20} color="red" />
              </TouchableOpacity>
            </View>
            {/*<Text style={styles.adminEmail}>{adminEmail}</Text>*/}
          </View>
        </View>
      </View>
  </View>
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      

      {/* Grid Sections */}
      <View style={styles.gridContainer}>
        <View style={styles.gridColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Register New Clinic</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Clinic Name" />
            <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Contact Email" />
            <TouchableOpacity style={styles.button} onPress={handleCreateClinic}>
              <Text style={styles.buttonText}>Create Clinic</Text>
            </TouchableOpacity>
          </View>

           <View style={styles.section}>
            <Text style={styles.sectionTitle}>Registered Clinics</Text>
            <TextInput style={styles.input} placeholder="Search clinics..." value={search} onChangeText={setSearch} />
            <Text style={styles.count}>Total Clinics: {filteredClinics.length}</Text>
            {filteredClinics.map(clinic => (
              <View key={clinic.id} style={styles.clinicItem}>
                {editingId === clinic.id ? (
                  <>
                    <TextInput style={styles.input} value={editName} onChangeText={setEditName} />
                    <TextInput style={styles.input} value={editEmail} onChangeText={setEditEmail} />
                    <TouchableOpacity style={styles.smallButton} onPress={handleUpdateClinic}><Text>Save</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.smallButton} onPress={() => setEditingId(null)}><Text>Cancel</Text></TouchableOpacity>
                  </>
                ) : (
                  <>
                    <Text style={styles.clinicText}><Text style={{ fontWeight: 'bold' }}>{clinic.name}</Text> ({clinic.email})</Text>
                    <View style={{ flexDirection: 'row', marginTop: 6 }}>
                      <TouchableOpacity style={styles.smallButton} onPress={() => {
                        setEditingId(clinic.id);
                        setEditName(clinic.name);
                        setEditEmail(clinic.email);
                      }}><Text>Edit</Text></TouchableOpacity>
                      <TouchableOpacity style={styles.smallButton} onPress={() => handleDeleteClinic(clinic.id)}><Text>Delete</Text></TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
            ))}
          </View>

        </View>

        <View style={styles.gridColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📈 Analytics</Text>
            <Text>Total Clinics: {clinics.length}</Text>
            <Text>Infra Success: {clinics.length}</Text>
            <Text>Infra Failures: 0 (mock)</Text>
          </View>
         
         <View style={styles.section}>
            <CloudMetricsScreen />
          </View>
        </View>
      </View>
   
    </ScrollView>
       <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
    padding: 14,
    flex: 1
  },
  pageContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    position: 'relative',
    paddingTop: 60,   // Match fixed header height
    paddingBottom: 35 // Reserve space for fixed footer
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 14,
    marginTop: 20
  },
  headerFixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#343a40',
    paddingHorizontal: 14,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
    zIndex: 1000
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  headerRight: {
    alignItems: 'flex-end'
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  adminEmail: {
    color: '#ccc',
    marginTop: 4,
    fontSize: 12
  },
  avatarContainer: {
    marginRight: 12
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16
  },
  logoutButton: {
    padding: 4
  },
  gridContainer: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 14
  },
  gridColumn: {
    flex: 1,
    minWidth: 450,
    maxWidth: Platform.OS === 'web' ? '50%' : '100%'
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#343a40'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#6c757d',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600'
  },
  count: {
    marginVertical: 6,
    fontWeight: 'bold'
  },
  clinicItem: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#f1f3f5',
    borderRadius: 8
  },
  clinicText: {
    color: '#343a40'
  },
  smallButton: {
    backgroundColor: '#dee2e6',
    padding: 6,
    marginRight: 8,
    borderRadius: 6
  }
});
