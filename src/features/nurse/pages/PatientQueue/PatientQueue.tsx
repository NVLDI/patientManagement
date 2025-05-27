import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './PatientQueue.style';

const patients = [
  { id: '1', name: 'James Wilson - Waiting for vitals check' },
  { id: '2', name: 'Sarah Johnson - Post-op check' },
  { id: '3', name: 'Michael Brown - Pre-surgery prep' },
];

const PatientQueue = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Queue</Text>
      <View style={styles.card}>
        <FlatList
          data={patients}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default PatientQueue;
