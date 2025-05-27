import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './Medications.style';

const allPatients = [
  {
    id: 'P001',
    name: 'John Doe',
    procedure: 'Root Canal Treatment',
    doctor: 'Dr. Smith',
    nurse: 'Nurse Clara',
    visits: 3,
    medications: [
      { name: 'Amoxicillin 500mg', timing: 'Morning', review: 'Reduced pain and no swelling' },
    ],
  },
  {
    id: 'P002',
    name: 'Sarah Johnson',
    procedure: 'Tooth Extraction',
    doctor: 'Dr. Khan',
    nurse: 'Nurse Alan',
    visits: 2,
    medications: [
      { name: 'Ibuprofen 200mg', timing: 'After Lunch', review: 'Felt slight discomfort, otherwise fine' },
    ],
  },
];

const Medications = () => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<any | null>(null);

  const filtered = allPatients.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medication Administration</Text>

      <TextInput
        style={styles.search}
        placeholder="Search Patient..."
        value={query}
        onChangeText={setQuery}
      />

      {selected ? (
        <View style={styles.card}>
          <Text style={styles.detail}>🧑 Patient: {selected.name}</Text>
          <Text style={styles.detail}>🦷 Procedure: {selected.procedure}</Text>
          <Text style={styles.detail}>👨‍⚕️ Doctor: {selected.doctor}</Text>
          <Text style={styles.detail}>👩‍⚕️ Nurse: {selected.nurse}</Text>
          <Text style={styles.detail}>🔁 Visits: {selected.visits}</Text>
          <Text style={styles.detail}>💊 Medications:</Text>
          {selected.medications.map((m: any, idx: number) => (
            <View key={idx} style={styles.medBlock}>
              <Text style={styles.medLine}>• {m.name} - {m.timing}</Text>
              <Text style={styles.review}>Review: {m.review}</Text>
            </View>
          ))}
          <TouchableOpacity onPress={() => setSelected(null)} style={styles.clearBtn}>
            <Text style={styles.clearText}>🔙 Back to Search</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelected(item)}
              style={styles.patientRow}
            >
              <Text style={styles.patientText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Medications;
