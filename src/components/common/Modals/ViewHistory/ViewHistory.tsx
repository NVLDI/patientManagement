// components/common/ViewHistory.tsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from './ViewHistory.style'; // Adjust the path as necessary

const ViewHistory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 Visit History</Text>
      <Text style={styles.text}>All patient visit and prescription history will appear here.</Text>
    </View>
  );
};

export default ViewHistory;
