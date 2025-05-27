// --path: src/features/auth/pages/Login/Login.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Login.style';
import WelcomeSplash from '../../../../components/common/Splash/WelcomeSplash'; // ✅ Import

type LoginProps = {
  onClose: () => void;
  onForgotPassword: () => void;
  onLoginSuccess: (role: string) => void;
};

const mockUsers = {
  doctor: { password: 'Doctor@123', role: 'doctor' },
  nurse: { password: 'Nurse@123', role: 'nurse' },
  reception: { password: 'Reception@123', role: 'reception' },
  admin: { password: 'Admin@123', role: 'admin' },
};

const Login: React.FC<LoginProps> = ({ onClose, onForgotPassword, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      const user = mockUsers[email.toLowerCase()];
      if (user && user.password === password) {
        setShowSplash(true);
        setTimeout(() => {
          setShowSplash(false);
          onLoginSuccess(user.role);
          onClose();
        }, 2000);
      } else {
        alert('Invalid credentials');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {showSplash && <WelcomeSplash onFinish={() => {}} />}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>Welcome Back 👋</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitle}>Login to your account</Text>

          <TextInput
            placeholder="Email (e.g. doctor)"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="default"
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            style={styles.input}
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />

          <TouchableOpacity onPress={handleLogin} style={styles.button} disabled={loading}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onClose();
              setTimeout(onForgotPassword, 300);
            }}
          >
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;


// path: src\features\auth\pages\Login\Login.style.ts
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { styles as createSidebarStyles } from './Reception.style';
import Dashboard from '../../features/reception/pages/Dashboard/ReceptionDashboard';
import Appointments from '../../features/reception/pages/Appointments/Appointments';
import Patients from '../../features/reception/pages/Patients/Patients';
import Billing from '../../features/reception/pages/Billing/Billing';
import WaitingRoom from '../../features/reception/pages/WaitingRoom/WaitingRoom';
import TopBar from '../../components/common/TopBar/TopBar';

const ReceptionLayout: React.FC = () => {
  const sidebarStyles = createSidebarStyles();
  const screenWidth = Dimensions.get('window').width;
  const drawerWidth = 250;
  const closedOffset = -(drawerWidth * 0.8);
  const isMobile = screenWidth < 768;

  const [currentTab, setCurrentTab] = useState('Dashboard');
  const [isDrawerVisible, setIsDrawerVisible] = useState(true);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const contentMargin = useRef(new Animated.Value(250)).current;

  const toggleDrawer = () => {
    setIsDrawerVisible((prev) => !prev);
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isDrawerVisible ? 0 : isMobile ? -drawerWidth : closedOffset,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(contentMargin, {
      toValue: isDrawerVisible ? 250 : 50,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isDrawerVisible]);

  const navItems = [
    { id: 'dashboard', icon: '📋', label: 'Dashboard' },
    { id: 'appointments', icon: '📅', label: 'Appointments' },
    { id: 'patients', icon: '🧑‍🤝‍🧑', label: 'Patients' },
    { id: 'billing', icon: '💳', label: 'Billing' },
    { id: 'waitingRoom', icon: '🕒', label: 'Waiting Room' },
  ];

  return (
    <SafeAreaView style={layoutStyles.container}>
      <View style={layoutStyles.topBarAbsolute}>
        <TopBar doctorName="Receptionist" notifications={1} initials="RC" />
      </View>

      <View style={layoutStyles.bodyWrapper}>
        <Pressable
          onHoverIn={() => !isMobile && setIsDrawerVisible(true)}
          onHoverOut={() => !isMobile && setIsDrawerVisible(false)}
          style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: drawerWidth }}
        >
          <Animated.View
            style={[sidebarStyles.sidebar, { transform: [{ translateX: slideAnim }] }]}
          >
            <View style={sidebarStyles.logo}>
              <Text style={sidebarStyles.logoText}>🏥 WhiteSquare</Text>
            </View>

            <View>
              {navItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    sidebarStyles.navItem,
                    currentTab === item.label && sidebarStyles.activeItem,
                  ]}
                  onPress={() => setCurrentTab(item.label)}
                >
                  <Text
                    style={[
                      sidebarStyles.navText,
                      currentTab === item.label && sidebarStyles.activeText,
                    ]}
                  >
                    {item.icon} {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </Animated.View>
        </Pressable>

        <Animated.View style={[layoutStyles.content, { marginLeft: contentMargin }]}>
          <ScrollView contentContainerStyle={layoutStyles.scrollViewContent}>
            {currentTab === 'Dashboard' && <Dashboard />}
            {currentTab === 'Appointments' && <Appointments />}
            {currentTab === 'Patients' && <Patients />}
            {currentTab === 'Billing' && <Billing />}
            {currentTab === 'Waiting Room' && <WaitingRoom />}
          </ScrollView>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarAbsolute: {
    zIndex: 100,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  bodyWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default ReceptionLayout;


// path: src/layouts/ReceptionLayout/ReceptionLayout.tsx
import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    sidebar: {
      backgroundColor: '#ffffff',
      paddingTop: 32,
      paddingHorizontal: 16,
      borderRightWidth: 1,
      borderColor: '#e5e7eb',
      width: 250,
      height: '100%',
    },
    logo: {
      marginBottom: 24,
      alignItems: 'center',
    },
    logoText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1e40af',
    },
    navItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 8,
      marginBottom: 8,
    },
    navText: {
      fontSize: 16,
      color: '#374151',
    },
    activeItem: {
      backgroundColor: '#e0f2fe',
    },
    activeText: {
      color: '#0284c7',
      fontWeight: 'bold',
    },
  });


// --path: src/features/auth/pages/Login/Login.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Login.style';
import WelcomeSplash from '../../../../components/common/Splash/WelcomeSplash'; // ✅ Import

type LoginProps = {
  onClose: () => void;
  onForgotPassword: () => void;
  onLoginSuccess: (role: string) => void;
};

const mockUsers = {
  doctor: { password: 'Doctor@123', role: 'doctor' },
  nurse: { password: 'Nurse@123', role: 'nurse' },
  reception: { password: 'Reception@123', role: 'reception' },
  admin: { password: 'Admin@123', role: 'admin' },
};

const Login: React.FC<LoginProps> = ({ onClose, onForgotPassword, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      const user = mockUsers[email.toLowerCase()];
      if (user && user.password === password) {
        setShowSplash(true);
        setTimeout(() => {
          setShowSplash(false);
          onLoginSuccess(user.role);
          onClose();
        }, 2000);
      } else {
        alert('Invalid credentials');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {showSplash && <WelcomeSplash onFinish={() => {}} />}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>Welcome Back 👋</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitle}>Login to your account</Text>

          <TextInput
            placeholder="Email (e.g. doctor)"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="default"
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            style={styles.input}
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />

          <TouchableOpacity onPress={handleLogin} style={styles.button} disabled={loading}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onClose();
              setTimeout(onForgotPassword, 300);
            }}
          >
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
