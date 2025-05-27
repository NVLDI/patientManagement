// doctor/components/Profile/Profile.tsx

import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Profile.style';

const Profile = () => {
  const navigation = useNavigation();

  const currentClinics = ['Smile Dental Care, Chennai', 'Bright Dental Hub, Coimbatore'];
  const pastClinics = ['City Dental Clinic, Bangalore', 'Pearl Dental Studio, Hyderabad'];

  const renderClinic = (clinic: string) => (
    <Text style={styles.value}>• {clinic}</Text>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Doctor Profile</Text>

      <View style={styles.profileInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Dr. Ajith Kumar</Text>

        <Text style={styles.label}>Specialization:</Text>
        <Text style={styles.value}>Oral & Maxillofacial Surgeon</Text>

        <Text style={styles.label}>Contact:</Text>
        <Text style={styles.value}>ajith.kumar@hospital.com</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>+91 98765 43210</Text>

        <Text style={styles.label}>Currently Working At:</Text>
        {currentClinics.map(renderClinic)}

        <Text style={styles.label}>Previously Worked At:</Text>
        {pastClinics.map(renderClinic)}
      </View>
    </ScrollView>
  );
};

export default Profile;
