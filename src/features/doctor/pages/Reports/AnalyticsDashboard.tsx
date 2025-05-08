import React from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(53, 116, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 8,
  },
  propsForDots: {
    r: '5',
    strokeWidth: '2',
    stroke: '#3b82f6',
  },
};

const AnalyticsDashboard = () => {
  const lineData = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 10) + 1),
        strokeWidth: 2,
        color: () => '#3b82f6',
      },
    ],
  };

  const barData = {
    labels: ['Amoxicillin', 'Ibuprofen', 'Paracetamol', 'Cetirizine', 'Azithromycin'],
    datasets: [
      {
        data: [45, 38, 31, 27, 19],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Analytics Dashboard</Text>

      <View style={styles.row}>
        {[
          { label: 'Total Patients', value: '210' },
          { label: 'Prescriptions', value: '320' },
          { label: 'Tests Ordered', value: '145' },
          { label: 'Satisfaction', value: '87%' },
        ].map((item, idx) => (
          <View key={idx} style={styles.statCard}>
            <Text style={styles.statValue}>{item.value}</Text>
            <Text style={styles.statLabel}>{item.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.graphSection}>
        <Text style={styles.graphTitle}>Appointments Trend</Text>
        <LineChart
          data={lineData}
          width={screenWidth - 32}
          height={220}
          chartConfig={chartConfig}
          bezier
        />
      </View>

      <View style={styles.graphSection}>
        <Text style={styles.graphTitle}>Top Prescribed Medications</Text>
        <BarChart
    data={barData}
    width={screenWidth - 32}
    height={220}
    fromZero
    showValuesOnTopOfBars
    yAxisLabel=""
    yAxisSuffix=" Rx"
    chartConfig={chartConfig}
  />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9fafb',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  statCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  graphSection: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  graphTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
});

export default AnalyticsDashboard;
