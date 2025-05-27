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

import sidebarStyles from './NurseLayout.style';
import TopBar from '../../components/common/TopBar/TopBar';

import Dashboard from '../../features/nurse/pages/NurseDashboard/Dashboard';
import PatientQueue from '../../features/nurse/pages/PatientQueue/PatientQueue';
import RecentVisits from '../../features/nurse/pages/RecentVisits/RecentVisits';
import ProcedureAssistance from '../../features/nurse/pages/Procedures/Procedures';
import MedicationAdmin from '../../features/nurse/pages/Medications/Medications';

const NurseLayout: React.FC = () => {
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
    { id: 'Patient Queue', icon: '🧑‍🤝‍🧑', label: 'Patient Queue' },
    { id: 'Recent Visits', icon: '📋', label: 'Recent Visits' },
    { id: 'Procedure Assistance', icon: '🦷', label: 'Procedure Assistance' },
    { id: 'Medication Admin', icon: '💊', label: 'Medication Admin' },
  ];

  const renderContent = () => {
    switch (currentTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Patient Queue':
        return <PatientQueue />;
      case 'Recent Visits':
        return <RecentVisits />;
      case 'Procedure Assistance':
        return <ProcedureAssistance />;
      case 'Medication Admin':
        return <MedicationAdmin />;
      default:
        return <Text style={layoutStyles.placeholder}>Select a tab to begin</Text>;
    }
  };

  return (
    <SafeAreaView style={layoutStyles.container}>
      <View style={layoutStyles.topBarAbsolute}>
        <TopBar doctorName="Nurse" notifications={1} initials="NR" />
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

            {navItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  sidebarStyles.button,
                  currentTab === item.label && sidebarStyles.activeButton,
                ]}
                onPress={() => setCurrentTab(item.label)}
              >
                <Text
                  style={[
                    sidebarStyles.buttonText,
                    currentTab === item.label && sidebarStyles.activeText,
                  ]}
                >
                  {`${item.icon} ${item.label}`}
                </Text>
              </TouchableOpacity>
            ))}
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

export default NurseLayout;
