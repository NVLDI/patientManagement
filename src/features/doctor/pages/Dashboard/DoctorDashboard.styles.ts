import { StyleSheet } from 'react-native';

export const doctorDashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  mainContent: {
    flex: 3,
    padding: 10,
  },
  metricsContainer: {
    flexDirection: 'row', // Change to row for horizontal layout
    justifyContent: 'space-between', // Distribute space evenly
    width: '100%',
  },
  metricItem: {
    flex: 1, // Each item takes equal space
    marginHorizontal: 4, // Add some spacing between cards
    maxWidth: '33%', // Limit width to roughly a third of container
  },
});