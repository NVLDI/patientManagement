import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import styles from './Analytics.style';

const Analytics = () => {
  const { width } = useWindowDimensions();

  const metrics = [
    { label: 'Total Patients', value: '1,254', color: '#2962FF' },
    { label: 'Appointments Today', value: '32', color: '#2E7D32' },
    { label: 'Monthly Revenue', value: '$18,750', color: '#8E24AA' },
  ];

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 30],
        color: () => '#2979FF',
        strokeWidth: 2,
      },
    ],
    legend: ['Appointments'],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Patient Management System Admin</Text>
      <Text style={styles.subHeader}>Analytics</Text>

      {/* Metric Cards */}
      <View style={styles.metricsRow}>
        {metrics.map((item, index) => (
          <View key={index} style={styles.metricCard}>
            <Text style={[styles.metricValue, { color: item.color }]}>{item.value}</Text>
            <Text style={styles.metricLabel}>{item.label}</Text>
          </View>
        ))}
      </View>

      {/* Chart */}
      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>Appointments Over Time</Text>
        <LineChart
          data={chartData}
          width={width - 40} // Responsive width
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(41, 121, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: { borderRadius: 16 },
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: '#2979FF',
            },
          }}
          style={{ marginVertical: 8, borderRadius: 10 }}
        />
      </View>
    </View>
  );
};

export default Analytics;
