// components/Modals/NewAppointmentModal.tsx
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { DatePickerModal, TimePickerModal } from 'react-native-paper-dates';
import { newAppointmentModalStyles as styles } from './NewAppointmentModal.style';

const NewAppointmentModal = ({ visible, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(undefined);
  const [time, setTime] = useState(undefined);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleAdd = () => {
    if (name && date && time) {
      const formattedDate = date.toISOString().split('T')[0];
      const formattedTime = `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')} ${time.hours >= 12 ? 'PM' : 'AM'}`;
      onAdd({ name, date: formattedDate, time: formattedTime });
      setName('');
      setDate(undefined);
      setTime(undefined);
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>🆕 New Appointment</Text>

          <TextInput
            placeholder="Patient Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
            <Text style={{ color: date ? '#000' : '#aaa' }}>{date ? date.toDateString() : 'Select Date'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.input}>
            <Text style={{ color: time ? '#000' : '#aaa' }}>{time ? `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')} ${time.hours >= 12 ? 'PM' : 'AM'}` : 'Select Time'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Appointment</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <DatePickerModal
          locale="en"
          mode="single"
          visible={showDatePicker}
          onDismiss={() => setShowDatePicker(false)}
          date={date}
          onConfirm={({ date }) => {
            setShowDatePicker(false);
            setDate(date);
          }}
        />

        <TimePickerModal
          visible={showTimePicker}
          onDismiss={() => setShowTimePicker(false)}
          onConfirm={(time) => {
            setShowTimePicker(false);
            setTime(time);
          }}
          hours={12}
          minutes={0}
        />
      </View>
    </Modal>
  );
};

export default NewAppointmentModal;
