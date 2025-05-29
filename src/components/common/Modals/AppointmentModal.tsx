import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppointmentModalStyles as styles } from './AppointmentModal.style';

interface AppointmentModalProps {
  visible: boolean;
  data: {
    name: string;
    date: string;
    time: string;
    type: string;
    note: string;
  } | null;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ visible, data, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.title}>{data?.name}</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <Text>Date: {data?.date}</Text>
          <Text>Time: {data?.time}</Text>
          <Text>Reason: {data?.type}</Text>
          <Text style={{ marginTop: 8 }}>Last Note: {data?.note}</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.rescheduleButton} onPress={() => alert('Reschedule logic here')}>
              <Ionicons name="refresh" size={20} color="#fff" />
              <Text style={styles.buttonText}>Reschedule</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={() => alert('Cancel logic here')}>
              <Ionicons name="close-circle" size={20} color="#fff" />
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AppointmentModal;
