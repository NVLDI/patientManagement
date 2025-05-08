// src/components/common/Card/MetricCardStyles.styles.ts

import { StyleSheet } from 'react-native';

export const metricCardStyles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    // Replace shadow* props with boxShadow for web
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    // Keep elevation for Android
    elevation: 2,
    flex: 1,
    minHeight: 120,
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
});