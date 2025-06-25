import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Metric {
  name: string;
  count: number;
}

const METRICS: Metric[] = [
  { name: 'AmplifyHosting', count: 0 },
  { name: 'AppSync', count: 0 },
  { name: 'Cognito', count: 0 },
  { name: 'DynamoDB', count: 0 },
  { name: 'Events', count: 0 },
  { name: 'KMS', count: 0 },
  { name: 'Lambda', count: 0 },
  { name: 'Logs', count: 0 },
  { name: 'S3', count: 0 },
  { name: 'SNS', count: 0 },
  { name: 'Usage', count: 0 },
];

const TIME_RANGES = ['1h', '3h', '12h', '1d', '3d', '1w'];

const CloudMetricsScreen: React.FC = () => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 768;
  const [title, setTitle] = useState('Untitled graph');
  const [search, setSearch] = useState('');

  return (
    
<>
      {/* Time Range & Buttons */}
      <View style={styles.controlsRow}>
        <View style={styles.timeRangeContainer}>
          {TIME_RANGES.map((range, index) => (
            <TouchableOpacity key={index} style={styles.timeButton}>
              <Text style={styles.timeButtonText}>{range}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.rightControls}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>UTC timezone</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Actions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Investigate</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Graph Placeholder */}
      <View style={styles.graphPlaceholder}>
        <Text style={styles.graphText}>Your CloudWatch graph is empty.</Text>
        <Text style={styles.graphTextSmall}>Select some metrics to appear here.</Text>
      </View>

      {/* Search */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#555" style={{ marginRight: 6 }} />
        <TextInput
          placeholder="Search for any metric, dimension, resource id or account id"
          value={search}
          onChangeText={setSearch}
          style={{ flex: 1 }}
        />
      </View>

      {/* Metric Cards */}
      <View style={[styles.grid, isLargeScreen ? styles.gridLarge : styles.gridSmall]}>
        {METRICS.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.metricName}>{item.name}</Text>
            <Text style={styles.metricCount}>{item.count}</Text>
            <Text style={styles.dashboardLink}>• View automatic dashboard</Text>
          </View>
        ))}
      </View>
  </>
  );
};

export default CloudMetricsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#f2f2f2',
  },
  header: {
    marginBottom: 8,
  },
  titleInput: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 4,
  },
  controlsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  timeRangeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeButton: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    margin: 4,
    borderRadius: 4,
  },
  timeButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  rightControls: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  actionButton: {
    backgroundColor: '#6c757d',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    marginLeft: 8,
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  graphPlaceholder: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  graphText: {
    fontSize: 16,
    color: '#444',
  },
  graphTextSmall: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridSmall: {
    justifyContent: 'center',
  },
  gridLarge: {
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    width: Platform.OS === 'web' ? '22%' : '45%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  metricName: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  metricCount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6c757d',
    marginBottom: 8,
  },
  dashboardLink: {
    fontSize: 12,
    color: '#6c757d',
    textDecorationLine: 'underline',
  },
});
