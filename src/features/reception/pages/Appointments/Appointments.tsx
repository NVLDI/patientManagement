import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  Pressable,
} from 'react-native';
import useStyles from './Appointments.style';

const Appointments = () => {
  const styles = useStyles();

  const [appointments, setAppointments] = useState([
    {
      id: '1',
      patient: 'John Doe',
      phone: '555-111-2222',
      doctor: 'Dr. Smith',
      type: 'Consultation',
      time: '2025-04-10T09:00',
    },
    {
      id: '2',
      patient: 'Emma Lee',
      phone: '555-444-7777',
      doctor: 'Dr. Khan',
      type: 'Procedure',
      time: '2025-04-10T10:00',
    },
  ]);

  const [modals, setModals] = useState({
    add: false,
    reschedule: false,
    cancel: false,
  });

  const [form, setForm] = useState({
    patient: '',
    phone: '',
    doctor: '',
    type: '',
    time: '',
  });

  const toggleModal = (key: string, value: boolean) => {
    setModals({ ...modals, [key]: value });
  };

  const renderModalInput = (valueKey: string, placeholder: string) => (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={form[valueKey as keyof typeof form]}
      onChangeText={(text) => setForm({ ...form, [valueKey]: text })}
    />
  );

  const AppointmentCard = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        {item.time} - <Text style={styles.bold}>{item.patient}</Text>
      </Text>
      <Text style={styles.cardSub}>
        {item.doctor} • {item.type} • {item.phone}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Buttons */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.addBtn} onPress={() => toggleModal('add', true)}>
          <Text style={styles.btnText}>➕ Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rescheduleBtn} onPress={() => toggleModal('reschedule', true)}>
          <Text style={styles.btnText}>🔁 Reschedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => toggleModal('cancel', true)}>
          <Text style={styles.btnText}>⛔ Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* Appointments List */}
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={AppointmentCard}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Add Modal */}
      <Modal transparent visible={modals.add} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Appointment</Text>
            {renderModalInput('patient', 'Patient Name')}
            {renderModalInput('phone', 'Phone Number')}
            {renderModalInput('doctor', 'Select Doctor')}
            {renderModalInput('type', 'Appointment Type')}
            {renderModalInput('time', 'dd-mm-yyyy --:--')}

            <View style={styles.modalActions}>
              <Pressable style={styles.modalCancel} onPress={() => toggleModal('add', false)}>
                <Text>Cancel</Text>
              </Pressable>
              <Pressable style={styles.modalSave} onPress={() => toggleModal('add', false)}>
                <Text style={{ color: 'white' }}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Reschedule Modal */}
      <Modal transparent visible={modals.reschedule} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Reschedule Appointment</Text>
            {renderModalInput('patient', '2025-04-10T09:00 - John Doe')}
            {renderModalInput('time', 'dd-mm-yyyy --:--')}
            <View style={styles.modalActions}>
              <Pressable style={styles.modalCancel} onPress={() => toggleModal('reschedule', false)}>
                <Text>Cancel</Text>
              </Pressable>
              <Pressable style={styles.modalReschedule} onPress={() => toggleModal('reschedule', false)}>
                <Text style={{ color: 'white' }}>Reschedule</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Cancel Modal */}
      <Modal transparent visible={modals.cancel} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Cancel Appointment</Text>
            {renderModalInput('patient', 'Select Appointment')}
            <View style={styles.modalActions}>
              <Pressable style={styles.modalCancel} onPress={() => toggleModal('cancel', false)}>
                <Text>Back</Text>
              </Pressable>
              <Pressable style={styles.cancelBtn} onPress={() => toggleModal('cancel', false)}>
                <Text style={{ color: 'white' }}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Appointments;
