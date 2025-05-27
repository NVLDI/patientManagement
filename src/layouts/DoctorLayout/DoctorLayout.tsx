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
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Dashboard from '../../features/doctor/pages/Dashboard/DoctorDashboard';
import Appointments from '../../features/doctor/pages/Appointments/Calendar';
import Patients from '../../features/doctor/pages/Patients/PatientRecord';
import Prescriptions from '../../features/doctor/pages/Prescriptions/PatientPrescriptionList';
import Analytics from '../../features/doctor/pages/Reports/AnalyticsDashboard';
import PatientBilling from '../../features/doctor/pages/Bills/Bills';
import TopBar from '../../components/common/TopBar/TopBar';
import NotificationModal from '../../components/common/Modals/NotificationModal'; // ✅ NEW
import { styles } from './DoctorLayout.style';

const notificationsGroupedByPatient = {
  P001: [
    { id: 'n1', text: 'Missed appointment on May 14', time: '15 mins ago' },
    { id: 'n2', text: 'Lab report uploaded', time: '30 mins ago' },
  ],
  P002: [
    { id: 'n3', text: 'Upcoming surgery scheduled', time: '1 hour ago' },
  ],
};
type DoctorLayoutProps = {
  onLogout: () => void;
};
const DoctorLayout: React.FC<DoctorLayoutProps> = ({ onLogout }) => {
  const navigation = useNavigation(); // ✅ This line was missing
  const screenWidth = Dimensions.get('window').width;
  const drawerWidth = 250;
  const closedOffset = -(drawerWidth * 0.8);
  const isMobile = screenWidth < 768;

  const [currentTab, setCurrentTab] = useState('Dashboard');
  const [isDrawerVisible, setIsDrawerVisible] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [selectedPatientNotifications, setSelectedPatientNotifications] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const slideAnim = useRef(new Animated.Value(0)).current;
  const contentMargin = useRef(new Animated.Value(250)).current;
  const dropdownAnim = useRef(new Animated.Value(0)).current;

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

  useEffect(() => {
    Animated.timing(dropdownAnim, {
      toValue: showNotifications || showProfileMenu ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [showNotifications, showProfileMenu]);

  const closeAllDropdowns = () => {
    Animated.timing(dropdownAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setShowNotifications(false);
      setShowProfileMenu(false);
    });
  };

  const toggleDropdown = (type) => {
    if (type === 'notifications') {
      if (showNotifications) {
        closeAllDropdowns();
      } else {
        setShowNotifications(true);
        setShowProfileMenu(false);
      }
    } else {
      if (showProfileMenu) {
        closeAllDropdowns();
      } else {
        setShowProfileMenu(true);
        setShowNotifications(false);
      }
    }
  };

  const handleNotificationGroupClick = (patientId) => {
    setSelectedPatientId(patientId);
    setSelectedPatientNotifications(notificationsGroupedByPatient[patientId]);
    setModalVisible(true);
  };

  const NotificationDropdown = () => {
    if (!showNotifications) return null;
    return (
      <Animated.View
        style={[
          notificationStyles.dropdown,
          {
            opacity: dropdownAnim,
            transform: [
              {
                translateY: dropdownAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-10, 0],
                }),
              },
            ],
          },
        ]}
      >
        <View style={notificationStyles.arrow} />
        <Text style={notificationStyles.header}>Notifications</Text>
        <ScrollView>
          {Object.entries(notificationsGroupedByPatient).map(([patientId, notifications]) => (
            <TouchableOpacity
              key={patientId}
              onPress={() => handleNotificationGroupClick(patientId)}
              style={{ marginBottom: 10 }}
            >
              <Text style={notificationStyles.patientHeader}>👤 Patient ID: {patientId}</Text>
              {notifications.map((n) => (
                <View key={n.id} style={{ marginLeft: 10, marginBottom: 6 }}>
                  <Text style={notificationStyles.notificationText}>• {n.text}</Text>
                  <Text style={notificationStyles.timeText}>{n.time}</Text>
                </View>
              ))}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>
    );
  };

  const ProfileMenu = () => {
    if (!showProfileMenu) return null;
    return (
      <TouchableWithoutFeedback onPress={closeAllDropdowns}>
        <Animated.View
          style={[
            profileStyles.menuBox,
            {
              opacity: dropdownAnim,
              transform: [
                {
                  translateY: dropdownAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-10, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={profileStyles.arrow} />
          <TouchableOpacity style={profileStyles.menuItem}
          onPress={() => navigation.navigate('Profile')}>
            <Text style={profileStyles.menuText}>👤 Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={profileStyles.menuItem}
          onPress={() => navigation.navigate('Settings')}>
            <Text style={profileStyles.menuText}>⚙️ Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={profileStyles.menuItem}
           onPress={() => {
    closeAllDropdowns();
    console.log('🚪 Logout button clicked');
    console.log('🚪 onLogout() triggered immediately');
    onLogout(); // <-- directly log out without Alert
  }}
>
            <Text style={profileStyles.menuText}>🚪 Logout</Text>
          </TouchableOpacity>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };

  const navItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'appointments', icon: '📅', label: 'Appointments' },
    { id: 'patient', icon: '👨', label: 'Patient Record' },
    { id: 'prescription', icon: '💊', label: 'Prescription' },
    { id: 'analytics', icon: '📈', label: 'Analytics' },
    { id: 'bills', icon: '💵', label: 'Bills' },
    { id: 'whatsapp', icon: '💬', label: 'Whatsapp' },
  ];

  return (
    <TouchableWithoutFeedback onPress={closeAllDropdowns}>
      <SafeAreaView style={layoutStyles.container}>
        <View style={layoutStyles.topBarAbsolute}>
          <TopBar
            doctorName="Dr. Ajith Kumar"
            notifications={3}
            initials="AK"
            onBellClick={() => toggleDropdown('notifications')}
            onAvatarClick={() => toggleDropdown('profile')}
          />
        </View>

        <NotificationDropdown />
        <ProfileMenu />
        <NotificationModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          patientId={selectedPatientId}
          notifications={selectedPatientNotifications}
        />

        <View style={layoutStyles.bodyWrapper}>
          <Pressable
            onHoverIn={() => !isMobile && setIsDrawerVisible(true)}
            onHoverOut={() => !isMobile && setIsDrawerVisible(false)}
            style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: drawerWidth }}
          >
            <Animated.View
              style={[styles.drawerContainer, { transform: [{ translateX: slideAnim }] }]}
            >
              <View style={styles.logoContainer}>
                <Text style={styles.logoIcon}>🏥</Text>
              </View>
              <View style={styles.navItemsContainer}>
                {navItems.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={[
                      styles.navItem,
                      currentTab === item.label && styles.activeNavItem,
                    ]}
                    onPress={() => setCurrentTab(item.label)}
                  >
                    <Text style={styles.navIcon}>{item.icon}</Text>
                    <Text
                      style={[
                        styles.navLabel,
                        currentTab === item.label && styles.activeNavLabel,
                      ]}
                    >
                      {item.label}
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
              {currentTab === 'Patient Record' && <Patients />}
              {currentTab === 'Prescription' && <Prescriptions />}
              {currentTab === 'Analytics' && <Analytics />}
              {currentTab === 'Bills' && <PatientBilling />}
            </ScrollView>
          </Animated.View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const layoutStyles = StyleSheet.create({
  container: { flex: 1 },
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
  bodyWrapper: { flex: 1, flexDirection: 'row' },
  content: { flex: 1, padding: 20, paddingTop: 10 },
  scrollViewContent: { flexGrow: 1 },
});

const notificationStyles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    right: 20,
    top: 65,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    width: 300,
    maxHeight: 400,
    elevation: 10,
    zIndex: 999,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  arrow: {
    position: 'absolute',
    top: -10,
    right: 70,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 10,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
    zIndex: 1000,
  },
  header: { fontWeight: 'bold', fontSize: 16, marginBottom: 10 },
  patientHeader: { marginTop: 10, fontWeight: '600', color: '#333' },
  notificationText: { fontSize: 14 },
  timeText: { fontSize: 12, color: '#888', marginLeft: 10 },
});

const profileStyles = StyleSheet.create({
  menuBox: {
    position: 'absolute',
    right: 20,
    top: 65,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    width: 180,
    elevation: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    zIndex: 998,
  },
  arrow: {
    position: 'absolute',
    top: -10,
    right: 12,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 10,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
    zIndex: 1000,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: { fontSize: 16 },
});

export default DoctorLayout;
