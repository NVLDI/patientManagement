import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './AdminDashboard.style'

const Dashboard = () => {
  const stats = [
    { label: 'Registered Users', value: '128' },
    { label: 'Active Integrations', value: '6' },
    { label: 'Pending Reports', value: '3' },
    { label: 'System Uptime', value: '99%' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Patient Management System Admin</Text>

      {/* Stats Cards */}
      <View style={styles.statsRow}>
        {stats.map((item, idx) => (
          <View key={idx} style={styles.statCard}>
            <Text style={styles.statValue}>{item.value}</Text>
            <Text style={styles.statLabel}>{item.label}</Text>
          </View>
        ))}
      </View>

      {/* Analytics Overview */}
      <View style={styles.analyticsContainer}>
        <View style={styles.analyticsHeader}>
          <Text style={styles.analyticsTitle}>Admin Analytics Overview</Text>
          <TouchableOpacity style={styles.exportButton}>
            <Text style={styles.exportText}>Export</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.graphRow}>
          <View style={styles.graphBox}>
            <Text style={styles.graphTitle}>User Activity</Text>
            <Text style={styles.graphPlaceholder}>Graph Placeholder</Text>
          </View>
          <View style={styles.graphBox}>
            <Text style={styles.graphTitle}>System Logs</Text>
            <Text style={styles.graphPlaceholder}>Graph Placeholder</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
