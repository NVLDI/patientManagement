// components/common/OpenRecord.tsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from './OpenRecord.style'; // Adjust the path as necessary

const OpenRecord = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📁 Patient Record</Text>
      <Text style={styles.text}>This is where detailed patient records will be shown.</Text>
    </View>
  );
};

export default OpenRecord;
