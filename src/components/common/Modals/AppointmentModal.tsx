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

          <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
            <TouchableOpacity style={[styles.actionButton, styles.rescheduleButton]} onPress={() => alert('Reschedule logic here')}>
              <Text style={styles.actionText}>Reschedule</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, styles.cancelButton]} onPress={() => alert('Cancel logic here')}>
              <Text style={styles.actionText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AppointmentModal;
