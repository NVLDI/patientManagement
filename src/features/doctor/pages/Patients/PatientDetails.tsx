import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import styles from './PatientDetails.styles'; // ✅ Corrected your import (was typo with comma)
import PatientNotes from './PatientNotes';
import PatientTest from './PatientTest'; // ⬅️ Import
import PatientPrescription from './PatientPrescription';
import PatientBilling from './PatientBilling'; // ⬅️ Import
import PatientTimeline from './PatientTimeline';
import PatientPhoto from './PatientPhoto'; // ⬅️ Import
import PatientImage from './PatientImage'; // ⬅️ Import
const PatientDetails = () => {
  const tabs = [
    'History',
    'Timeline',
    'Notes',
    'Images',
    'Photos',
    'Tests',
    'Prescriptions',
    'Billing',
  ];

  const [activeTab, setActiveTab] = useState('History'); // 🔥 Track active tab

  const renderTabContent = () => {
    switch (activeTab) {
      case 'History':
        return (
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Medical History</Text>
            <View style={styles.historyList}>
              <Text style={styles.historyItem}>• Diabetes, Type II</Text>
              <Text style={styles.historyItem}>• Hypertension</Text>
              <Text style={styles.historyItem}>• Allergic to penicillin</Text>
            </View>
          </View>
        );
      case 'Timeline':
        return <PatientTimeline />;
      case 'Notes':
        return <PatientNotes />;
      case 'Images':
        return <PatientImage />;
      case 'Photos':
        return <PatientPhoto />;
      case 'Tests':
        return <PatientTest />;
      case 'Prescriptions':
        return <PatientPrescription />;
      case 'Billing':
        return <PatientBilling />;
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Link */}
      <Text style={styles.backLink}>&larr; Back to Patient List</Text>

      {/* Profile Header */}
      <View style={styles.card}>
        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JW</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>James Wilson</Text>
            <Text style={styles.details}>Age: 45 • Gender: Male • Patient ID: JW123456</Text>
            <Text style={styles.details}>Phone: +1 (555) 111-2222 • Email: james.w@example.com</Text>
            <Text style={styles.lastVisit}>Last Visit: April 2, 2025</Text>
          </View>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {tabs.map((tab, index) => (
          <Pressable key={index} style={styles.tabItem} onPress={() => setActiveTab(tab)}>
            <Text style={activeTab === tab ? styles.tabActive : styles.tabInactive}>
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Dynamic Tab Content */}
      {renderTabContent()}
    </ScrollView>
  );
};

export default PatientDetails;
