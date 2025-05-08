import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import styles from './NewPrescriptionModal.styles';

interface Medication {
  name: string;
  morning: boolean;
  afternoon: boolean;
  evening: boolean;
  night: boolean;
  foodInstruction: string;
  days: string;
  instructions: string;
}

interface NewPrescriptionModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (data: Medication[], pharmacyFlag: boolean) => void;
}

const NewPrescriptionModal: React.FC<NewPrescriptionModalProps> = ({ visible, onClose, onSave }) => {
  const [medications, setMedications] = useState<Medication[]>([
    {
      name: '',
      morning: false,
      afternoon: false,
      evening: false,
      night: false,
      foodInstruction: '',
      days: '',
      instructions: '',
    },
  ]);

  const [sendToPharmacy, setSendToPharmacy] = useState(false);

  const handleAddMedication = () => {
    setMedications([
      ...medications,
      {
        name: '',
        morning: false,
        afternoon: false,
        evening: false,
        night: false,
        foodInstruction: '',
        days: '',
        instructions: '',
      },
    ]);
  };

  const handleRemoveMedication = (index: number) => {
    const updated = medications.filter((_, i) => i !== index);
    setMedications(updated);
  };

  const handleChange = <K extends keyof Medication>(
    index: number,
    field: K,
    value: Medication[K]
  ) => {
    const updated = [...medications];
    updated[index][field] = value;
    setMedications(updated);
  };
  

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.modalBackground}>
        <View style={styles.modalCard}>
          <Text style={styles.modalTitle}>New Prescription</Text>

          <ScrollView style={styles.scrollContainer}>
            {medications.map((med, idx) => (
              <View key={idx} style={styles.medicationContainer}>
                <TextInput
                  placeholder="Medication name"
                  style={styles.input}
                  value={med.name}
                  onChangeText={(text) => handleChange(idx, 'name', text)}
                />

                <View style={styles.checkboxRow}>
                  {['morning', 'afternoon', 'evening', 'night'].map((time) => (
                    <TouchableOpacity
                      key={time}
                      style={styles.checkboxItem}
                      onPress={() => handleChange(idx, time as keyof Medication, !med[time as keyof Medication])}
                    >
                      <View style={med[time as keyof Medication] ? styles.checkboxChecked : styles.checkboxEmpty} />
                      <Text style={styles.checkboxLabel}>{time.charAt(0).toUpperCase() + time.slice(1)}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <TextInput
                  placeholder="Food Instruction"
                  style={styles.input}
                  value={med.foodInstruction}
                  onChangeText={(text) => handleChange(idx, 'foodInstruction', text)}
                />

                <TextInput
                  placeholder="Number of days"
                  style={styles.input}
                  keyboardType="numeric"
                  value={med.days}
                  onChangeText={(text) => handleChange(idx, 'days', text)}
                />

                <TextInput
                  placeholder="Special instructions..."
                  style={[styles.input, { height: 80 }]}
                  multiline
                  value={med.instructions}
                  onChangeText={(text) => handleChange(idx, 'instructions', text)}
                />

                <TouchableOpacity onPress={() => handleRemoveMedication(idx)}>
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
              </View>
            ))}

            <TouchableOpacity style={styles.addMedicationButton} onPress={handleAddMedication}>
              <Text style={styles.addMedicationButtonText}>+ Add Another Medication</Text>
            </TouchableOpacity>

            <View style={styles.sendToPharmacyRow}>
              <Switch value={sendToPharmacy} onValueChange={setSendToPharmacy} />
              <Text style={styles.sendToPharmacyText}>Send to pharmacy</Text>
            </View>
          </ScrollView>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => onSave(medications, sendToPharmacy)}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NewPrescriptionModal;
