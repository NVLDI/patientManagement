import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Switch, TouchableOpacity, ScrollView } from 'react-native';
import styles from './PatientPrescription.styles';

const PatientPrescription = () => {
  const [sendToPharmacy, setSendToPharmacy] = useState(false);
  const [foodOption, setFoodOption] = useState('');
  const [morning, setMorning] = useState(false);
  const [afternoon, setAfternoon] = useState(false);
  const [evening, setEvening] = useState(false);
  const [night, setNight] = useState(false);
  const [instruction, setInstruction] = useState(false);

  return (
    <ScrollView style={styles.card}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Prescriptions</Text>
        <Pressable style={styles.newPrescriptionButton}>
          <Text style={styles.newPrescriptionButtonText}>+ New Prescription</Text>
        </Pressable>
      </View>
        {/* Existing Prescription */}
      <View style={styles.prescriptionList}>
        <View style={styles.prescriptionItem}>
          <Text style={styles.prescriptionTitle}>
            <Text style={{ fontWeight: 'bold' }}>Amoxicillin 500mg</Text> – Morning, Night (Before Food) – 7 Days
          </Text>
          <Text style={styles.prescriptionDetails}>Take with water</Text>
          <Text style={styles.prescriptionDate}>Prescribed on Mar 30, 2025</Text>
        </View>
      </View>
      {/* New Prescription Section */}
      <View style={styles.newPrescriptionSection}>
        <Text style={styles.newPrescriptionTitle}>New Prescription</Text>

        {/* Table */}
        <ScrollView horizontal style={{ marginTop: 10 }}>
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.tableRowHeader}>
            <View style={styles.tableCellLarge}><Text style={styles.headerText}>Name</Text></View>
            <View style={styles.tableCellSmall}><Text style={styles.headerText}>Morning</Text></View>
            <View style={styles.tableCellSmall}><Text style={styles.headerText}>Afternoon</Text></View>
            <View style={styles.tableCellSmall}><Text style={styles.headerText}>Evening</Text></View>
            <View style={styles.tableCellSmall}><Text style={styles.headerText}>Night</Text></View>
            <View style={styles.tableCellMedium}><Text style={styles.headerText}>Food</Text></View>
            <View style={styles.tableCellSmall}><Text style={styles.headerText}>Days</Text></View>
            <View style={styles.tableCellMedium}><Text style={styles.headerText}>Instructions</Text></View>
            <View style={styles.tableCellSmall}><Text style={styles.headerText}>Action</Text></View>
          </View>

          {/* Table Row */}
          <View style={styles.tableRow}>
            {/* Medication Name */}
            <View style={styles.tableCellLarge}>
              <TextInput style={styles.inputField} placeholder="Medication name" />
            </View>

            {/* Morning, Afternoon, Evening, Night Checkboxes */}
            {[morning, afternoon, evening, night].map((state, idx) => (
              <View key={idx} style={styles.tableCellSmall}>
                <TouchableOpacity
                  style={state ? styles.checkboxChecked : styles.checkboxEmpty}
                  onPress={() => {
                    if (idx === 0) setMorning(!morning);
                    if (idx === 1) setAfternoon(!afternoon);
                    if (idx === 2) setEvening(!evening);
                    if (idx === 3) setNight(!night);
                  }}
                />
              </View>
            ))}

            {/* Food input */}
            <View style={styles.tableCellMedium}>
              <TextInput
                style={styles.inputField}
                placeholder="Select"
                value={foodOption}
                onChangeText={setFoodOption}
              />
            </View>

            {/* Days */}
            <View style={styles.tableCellSmall}>
              <TextInput
                style={styles.inputField}
                placeholder="6"
                keyboardType="numeric"
              />
            </View>

            {/* Instructions Switch */}
            <View style={styles.tableCellMedium}>
              <Switch value={instruction} onValueChange={setInstruction} />
            </View>

            {/* Action */}
            <View style={styles.tableCellSmall}>
              <Text style={styles.deleteAction}>-</Text>
            </View>
          </View>
        </View>
        </ScrollView>

        {/* Add Another Medication */}
        <Pressable style={styles.addMedicationButton}>
          <Text style={styles.addMedicationButtonText}>+ Add Another Medication</Text>
        </Pressable>

        {/* Send to Pharmacy */}
        <View style={styles.sendToPharmacyRow}>
          <TouchableOpacity onPress={() => setSendToPharmacy(!sendToPharmacy)}>
            <View style={sendToPharmacy ? styles.checkboxChecked : styles.checkboxEmpty} />
          </TouchableOpacity>
          <Text style={styles.sendToPharmacyText}>Send to Pharmacy</Text>
        </View>

        {/* Bottom Buttons */}
        <View style={styles.bottomButtonRow}>
          <Pressable style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Pressable>
          <Pressable style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save Prescription</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default PatientPrescription;
