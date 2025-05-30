import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './Bills.style';
import PatientDetailModal from '../../../../components/common/Modals/PatientDetailModal';
const mockPatients = [
  { id: 'P001', name: 'John Doe', dob: '1990-01-01', gender: 'Male' },
  { id: 'P002', name: 'Emma Lee', dob: '1992-03-12', gender: 'Female' },
  { id: 'P003', name: 'Alex Roy', dob: '1985-06-25', gender: 'Male' },
  { id: 'P004', name: 'Dinesh Kumar', dob: '1993-11-15', gender: 'Male' },
  { id: 'P005', name: 'Priya Sharma', dob: '1991-08-09', gender: 'Female' },
  { id: 'P006', name: 'Ravi Teja', dob: '1987-07-19', gender: 'Male' },
  { id: 'P007', name: 'Nikita Jain', dob: '1995-02-28', gender: 'Female' },
  { id: 'P008', name: 'Arun Mehta', dob: '1989-04-03', gender: 'Male' },
  { id: 'P009', name: 'Sneha Rao', dob: '1996-09-22', gender: 'Female' },
  { id: 'P010', name: 'Vikram Singh', dob: '1984-12-10', gender: 'Male' },
];

const patientBills = {
  P001: [
    { date: 'April 4, 2025', title: 'Consultation, CT Scan', paid: 1800 },
    { date: 'March 15, 2025', title: 'Consultation, Amoxicillin Prescription', unpaid: 950 },
  ],
  P002: [{ date: 'April 1, 2025', title: 'X-ray & Diagnosis', paid: 1000 }],
  P004: [{ date: 'May 1, 2025', title: 'Scaling & Polishing', unpaid: 750 }],
};

const Bills = () => {
  const [search, setSearch] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);

  const filteredPatients = mockPatients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={styles.card}>
      <Text style={styles.sectionTitle}>Patients</Text>
      <TextInput
        placeholder="Search patient by name..."
        value={search}
        onChangeText={setSearch}
        style={styles.inputField}
      />

      <FlatList
        data={filteredPatients}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.patientCard}
            onPress={() => {
              setSelectedPatient(item);
              setDetailModalVisible(true);
            }}
          >
            <Text style={styles.patientName}>{item.name}</Text>
            <Text style={styles.patientDetails}>
              DOB: {item.dob} | Gender: {item.gender}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Patient Detail Modal */}
      <PatientDetailModal
        visible={detailModalVisible}
        onClose={() => setDetailModalVisible(false)}
        patient={selectedPatient}
        bills={patientBills[selectedPatient?.id] || []}
      />
    </ScrollView>
  );
};

export default Bills;
