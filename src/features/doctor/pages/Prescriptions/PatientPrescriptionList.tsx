import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './PatientPrescriptionList.styles';
import NewPrescriptionModal from './NewPrescriptionModal'; // ✅ Adjust the path if needed

const PatientPrescriptionList = () => {
  const [search, setSearch] = useState('');
  const [onlyPharmacy, setOnlyPharmacy] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // ✅ Step 2

  const prescriptions = [
    {
      patient: 'Sarah Johnson',
      medication: 'Amoxicillin 500mg',
      times: 'Morning, Night',
      food: 'Before Food',
      days: 7,
      instructions: 'Take with water',
      date: 'Mar 30, 2025',
      pharmacy: true,
    },
    {
      patient: 'James Wilson',
      medication: 'Paracetamol',
      times: 'Morning, Evening',
      food: 'After Food',
      days: 5,
      instructions: '',
      date: 'Apr 2, 2025',
      pharmacy: false,
    },
  ];

  const filteredPrescriptions = prescriptions.filter((item) => {
    if (onlyPharmacy && !item.pharmacy) return false;
    if (search.trim() && !item.patient.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Prescriptions</Text>
        <Pressable style={styles.newPrescriptionButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.newPrescriptionButtonText}>+ New Prescription</Text>
        </Pressable>
      </View>

      {/* Search */}
      <TextInput
        placeholder="Search by patient..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />

      {/* Only show sent to pharmacy */}
      <View style={styles.onlyPharmacyRow}>
        <Switch value={onlyPharmacy} onValueChange={setOnlyPharmacy} />
        <Text style={styles.onlyPharmacyText}>Only show sent to pharmacy</Text>
      </View>

      {/* Table */}
      <ScrollView horizontal>
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.tableRowHeader}>
            {['Patient', 'Medication', 'Times', 'Food', 'Days', 'Instructions', 'Date', 'Pharmacy'].map((header, idx) => (
              <View key={idx} style={styles.tableCell}>
                <Text style={styles.headerText}>{header}</Text>
              </View>
            ))}
          </View>

          {/* Table Data */}
          {filteredPrescriptions.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableCell}><Text>{item.patient}</Text></View>
              <View style={styles.tableCell}><Text>{item.medication}</Text></View>
              <View style={styles.tableCell}><Text>{item.times}</Text></View>
              <View style={styles.tableCell}><Text>{item.food}</Text></View>
              <View style={styles.tableCell}><Text>{item.days}</Text></View>
              <View style={styles.tableCell}>
                <Text>{item.instructions ? item.instructions : '—'}</Text>
              </View>
              <View style={styles.tableCell}><Text>{item.date}</Text></View>
              <View style={styles.tableCell}>
                {item.pharmacy ? (
                  <Ionicons name="checkmark" size={20} color="green" />
                ) : (
                  <Text>—</Text>
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* ✅ New Prescription Modal */}
      <NewPrescriptionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={(data, pharmacyFlag) => {
          // Here you can handle saved prescription data
          console.log('Saved medications:', data, 'Send to pharmacy:', pharmacyFlag);
          setModalVisible(false);
        }}
      />
    </View>
  );
};

export default PatientPrescriptionList;
