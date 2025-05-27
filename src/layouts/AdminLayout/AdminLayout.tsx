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
import TopBar from '../../components/common/TopBar/TopBar';
import styles from './AdminLayout.style'

import Dashboard from '../../features/admin/pages/Dashboard/AdminDashboard';
import Analytics from '../../features/admin/pages/Analytics/Analytics';
import Reports from '../../features/admin/pages/Reports/Reports';
import SystemConfig from '../../features/admin/pages/SystemConfig/SystemConfig';
import Integrations from '../../features/admin/pages/Integrations/Integrations';
import UserManagement from '../../features/admin/pages/UserManagement/UserManagement';

const AdminLayout: React.FC = () => {
  const screenWidth = Dimensions.get('window').width;
  const drawerWidth = 250;
  const closedOffset = -(drawerWidth * 0.8);
  const isMobile = screenWidth < 768;

  const [currentTab, setCurrentTab] = useState('Dashboard');
  const [isDrawerVisible, setIsDrawerVisible] = useState(true);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const contentMargin = useRef(new Animated.Value(250)).current;

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
    { id: 'Dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'Analytics', icon: '📈', label: 'Analytics' },
    { id: 'Reports', icon: '📑', label: 'Reports' },
    { id: 'SystemConfig', icon: '⚙️', label: 'System Config' },
    { id: 'Integrations', icon: '🔗', label: 'Integrations' },
    { id: 'UserManagement', icon: '👥', label: 'User Management' },
  ];

  const renderContent = () => {
    switch (currentTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Analytics':
        return <Analytics />;
      case 'Reports':
        return <Reports />;
      case 'SystemConfig':
        return <SystemConfig />;
      case 'Integrations':
        return <Integrations />;
      case 'UserManagement':
        return <UserManagement />;
      default:
        return <Text style={layoutStyles.placeholder}>Please select a section</Text>;
    }
  };

  return (
    <SafeAreaView style={layoutStyles.container}>
      <View style={layoutStyles.topBarAbsolute}>
        <TopBar doctorName="Admin" notifications={2} initials="AD" />
      </View>

      <View style={layoutStyles.bodyWrapper}>
        <Pressable
          onHoverIn={() => !isMobile && setIsDrawerVisible(true)}
          onHoverOut={() => !isMobile && setIsDrawerVisible(false)}
          style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: drawerWidth }}
        >
          <Animated.View
            style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}
          >
            <View style={styles.logo}>
              <Text style={styles.logoText}>🛡️ Admin Panel</Text>
            </View>

            <View>
              {navItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.navItem,
                    currentTab === item.id && styles.activeItem,
                  ]}
                  onPress={() => setCurrentTab(item.id)}
                >
                  <Text
                    style={[
                      styles.navText,
                      currentTab === item.id && styles.activeText,
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
            {renderContent()}
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
  placeholder: {
    fontSize: 18,
    fontWeight: '500',
    paddingTop: 20,
  },
});

export default AdminLayout;
