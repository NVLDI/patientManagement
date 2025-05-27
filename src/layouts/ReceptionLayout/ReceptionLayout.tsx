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
