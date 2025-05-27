import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Procedures.style';

const procedureList = [
  {
    id: 'PROC001',
    summary: 'Assisting: Root Canal for Sarah (09:00 AM)',
    doctor: 'Dr. Smith',
    nurse: 'Nurse Clara',
    patient: 'Sarah Johnson',
    instruments: ['Suction Tip', 'Rubber Dam', 'Endo Motor'],
    visits: 3
  },
  {
    id: 'PROC002',
    summary: 'Setup: Implant Kit - Room 3',
    doctor: 'Dr. Patel',
    nurse: 'Nurse Alan',
    patient: 'Robert Chen',
    instruments: ['Implant Kit', 'Torque Wrench', 'Surgical Guide'],
    visits: 2
  },
];

const Procedures = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Procedure Assistance</Text>
      <View style={styles.card}>
        {procedureList.map(proc => (
          <View key={proc.id}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => toggleExpand(proc.id)}
            >
              <Text style={styles.itemText}>{proc.summary}</Text>
            </TouchableOpacity>
            {expandedId === proc.id && (
              <View style={styles.detailBox}>
                <Text style={styles.detailLine}>👩‍⚕️ Nurse: {proc.nurse}</Text>
                <Text style={styles.detailLine}>🧑‍⚕️ Doctor: {proc.doctor}</Text>
                <Text style={styles.detailLine}>🧑 Patient: {proc.patient}</Text>
                <Text style={styles.detailLine}>🔁 Visits: {proc.visits}</Text>
                <Text style={styles.detailLine}>🛠️ Instruments:</Text>
                {proc.instruments.map((inst, i) => (
                  <Text key={i} style={styles.instrument}>• {inst}</Text>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Procedures;
