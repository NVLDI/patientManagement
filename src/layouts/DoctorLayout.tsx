import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../components/common/NavBar/NavBar'; // Adjust the import path as necessary

const DoctorLayout: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('Dashboard');

  // Handle tab change
  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* NavBar component with necessary props */}
      <NavBar currentTab={currentTab} onTabChange={handleTabChange} />

      <View style={styles.content}>
        <Text style={styles.header}>Doctor Dashboard</Text>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {/* Your main content goes here */}
          {currentTab === 'Dashboard' && (
            <Text style={styles.section}>Dashboard Content</Text>
          )}
          {currentTab === 'Appointments' && (
            <Text style={styles.section}>Appointments Content</Text>
          )}
          {/* Add more conditional content based on the selected tab */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginLeft: 250, // Ensure this matches the width of the NavBar
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  section: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default DoctorLayout;
