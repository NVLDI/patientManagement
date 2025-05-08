import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './PatientRecord.style';

const patients = [
  { id: '1', name: 'James Wilson', dob: '1980-04-12', gender: 'Male' },
  { id: '2', name: 'Sarah Johnson', dob: '1989-06-28', gender: 'Female' },
  { id: '3', name: 'Robert Chen', dob: '1985-11-03', gender: 'Male' },
];

const PatientRecordPage = () => {
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Records</Text>
      <TextInput
        placeholder="Search by name..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />

      <FlatList
        data={filteredPatients}
        keyExtractor={item => item.id}
        style={styles.list}
        renderItem={({ item }) => {
          const isSelected = selectedId === item.id;
          return (
            <TouchableOpacity
              onPress={() => setSelectedId(item.id)}
              style={[styles.patientCard, isSelected && styles.selectedPatientCard]}
            >
              <Text style={styles.patientName}>{item.name}</Text>
              <Text style={styles.patientDetails}>DOB: {item.dob} | Gender: {item.gender}</Text>
            </TouchableOpacity>
          );
        }}
      />

      <View style={styles.newPatientButtonContainer}>
        <TouchableOpacity style={styles.newPatientButton}>
          <Ionicons name="add" size={20} color="white" />
          <Text style={styles.newPatientText}>New Patient</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PatientRecordPage;
