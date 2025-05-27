import React from 'react';
import { View, Text } from 'react-native';
import styles from './Dashboard.style';

const KPICards = [
  { label: 'Patients in Queue', value: 12 },
  { label: 'Ongoing Procedures', value: 5 },
  { label: 'Medications Administered', value: 20 },
  { label: 'Emergency Alerts', value: 3 },
];

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nurse Dashboard Overview</Text>
      <View style={styles.grid}>
        {KPICards.map((kpi, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.value}>{kpi.value}</Text>
            <Text style={styles.label}>{kpi.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Dashboard;
