import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles'; // Adjust the import path as necessary
import { getClinicDetails } from '../../utils/api'; // Replace with actual API call
import { Ionicons } from '@expo/vector-icons';

const ClinicDashboard = () => {
  const [clinic, setClinic] = useState<any>(null);
  const [showApiKey, setShowApiKey] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getClinicDetails(); // Replace with real logic
      setClinic(data);
    };
    fetchData();
  }, []);

  if (!clinic) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading clinic data...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.dashboardContainer}>
      <Text style={styles.dashboardTitle}>Clinic Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Clinic Name</Text>
        <Text style={styles.value}>{clinic.name}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{clinic.email}</Text>

        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{clinic.phone}</Text>

        <Text style={styles.label}>API URL</Text>
        <Text style={styles.value}>{clinic.apiUrl}</Text>

        <Text style={styles.label}>API Key</Text>
        <View style={styles.apiKeyRow}>
          <Text style={styles.value}>
            {showApiKey ? clinic.apiKey : '••••••••••••••'}
          </Text>
          <TouchableOpacity onPress={() => setShowApiKey(!showApiKey)}>
            <Ionicons
              name={showApiKey ? 'eye-off' : 'eye'}
              size={22}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Usage Summary</Text>
        <Text style={styles.usageItem}>📊 API Calls: {clinic.apiCalls}</Text>
        <Text style={styles.usageItem}>📂 S3 Usage: {clinic.s3UsageMB} MB</Text>
        <Text style={styles.usageItem}>🗃 DB Reads: {clinic.dbReads}</Text>
        <Text style={styles.usageItem}>✏️ DB Writes: {clinic.dbWrites}</Text>
        <Text style={styles.totalBill}>💰 Total: ₹{clinic.totalAmount}</Text>
      </View>
    </ScrollView>
  );
};

export default ClinicDashboard;
