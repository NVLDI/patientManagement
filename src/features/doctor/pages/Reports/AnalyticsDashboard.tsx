import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import styles from './AnalyticsDashboard.styles';

const screenWidth = Dimensions.get('window').width;
const chartWidth = (screenWidth - 48) / 2;

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(53, 116, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: { borderRadius: 8 },
  propsForDots: { r: '5', strokeWidth: '2', stroke: '#3b82f6' },
};

const AnalyticsDashboard = () => {
  const lineData = {
    labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
    datasets: [{ data: [12, 19, 9, 23, 14, 30, 18], strokeWidth: 2 }],
  };

  const barData = {
    labels: ['Extraction', 'Filling', 'Cleaning', 'Crown', 'Implant'],
    datasets: [{ data: [32, 45, 28, 12, 7] }],
  };

  const pieData = [
    { name: 'UPI', population: 35, color: '#3b82f6', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Cash', population: 25, color: '#10b981', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Card', population: 20, color: '#f59e0b', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Others', population: 10, color: '#ef4444', legendFontColor: '#333', legendFontSize: 12 },
  ];

  const revenueBar = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{ data: [120000, 95000, 134000, 98000, 111000] }],
  };

  const summaryCards = [
    { label: 'Total Patients', value: '210' },
    { label: 'Prescriptions', value: '320' },
    { label: 'Tests Ordered', value: '145' },
    { label: 'Satisfaction', value: '87%' },
    { label: 'Total Revenue', value: '₹1,20,000' },
    { label: 'Offline Clinics', value: '2' },
    { label: 'Working Clinics', value: '5' },
    { label: 'Total Procedures', value: '5' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Analytics Dashboard</Text>

      <View style={styles.statsRow}>
        {summaryCards.map((item, idx) => (
          <View key={idx} style={styles.statCard}>
            <Text style={styles.statValue}>{item.value}</Text>
            <Text style={styles.statLabel}>{item.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.chartGrid}>
        <View style={styles.chartCell}>
          <Text style={styles.chartTitle}>Appointments Trend</Text>
          <LineChart
            data={lineData}
            width={chartWidth}
            height={200}
            chartConfig={chartConfig}
            bezier
          />
        </View>

        <View style={styles.chartCell}>
          <Text style={styles.chartTitle}>Top Procedures</Text>
          <BarChart
            data={barData}
            width={chartWidth}
            height={200}
            fromZero
            showValuesOnTopOfBars
            chartConfig={chartConfig}
          />
        </View>

        <View style={styles.chartCell}>
          <Text style={styles.chartTitle}>Payment Methods</Text>
          <PieChart
            data={pieData}
            width={chartWidth}
            height={200}
            accessor="population"
            backgroundColor="transparent"
            chartConfig={chartConfig}
            paddingLeft="10"
            hasLegend={true}
          />
        </View>

        <View style={styles.chartCell}>
          <Text style={styles.chartTitle}>Revenue Over Months</Text>
          <BarChart
            data={revenueBar}
            width={chartWidth}
            height={200}
            fromZero
            showValuesOnTopOfBars
            yAxisLabel="₹"
            chartConfig={chartConfig}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AnalyticsDashboard;
