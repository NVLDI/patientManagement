import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import styles from './PatientDetails.styles';
import PatientNotes from './PatientNotes';
import PatientTest from './PatientTest';
import PatientPrescription from './PatientPrescription';
import PatientBilling from './PatientBilling';
import PatientTimeline from './PatientTimeline';
import PatientPhoto from './PatientPhoto';
import PatientImage from './PatientImage';

type Patient = {
  name: string;
  dob: string;
  gender: string;
  id: string;
  phone?: string;
  email?: string;
  lastVisit?: string;
  // add other patient fields if needed
};

type PatientDetailsRouteParams = {
  patient: Patient;
};

type PatientDetailsRouteProp = RouteProp<{ PatientDetails: PatientDetailsRouteParams }, 'PatientDetails'>;

const PatientDetails = () => {
  const route = useRoute<PatientDetailsRouteProp>(); // typed route
  const navigation = useNavigation(); 
  const { patient } = route.params;

  const tabs = [
    'History',
    'Timeline',
    'Notes',
    'Images',
    'Photos',
    'Tests',
    'Prescriptions',
    'Billing',
    'Dicom'
  ];

  const [activeTab, setActiveTab] = useState('History');

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
      case 'Dicom':
        return <PatientBilling />;
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Link */}
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.backLink}>&larr; Back to Patient List</Text>
      </Pressable>

      {/* Profile Header */}
      <View style={styles.card}>
        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{patient.name?.[0] ?? '?'}</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{patient.name}</Text>
            <Text style={styles.details}>
              DOB: {patient.dob} • Gender: {patient.gender} • Patient ID: {patient.id}
            </Text>
            <Text style={styles.details}>
              Phone: {patient.phone ?? 'N/A'} • Email: {patient.email ?? 'N/A'}
            </Text>
            <Text style={styles.lastVisit}>
              Last Visit: {patient.lastVisit ?? 'Not Available'}
            </Text>
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
