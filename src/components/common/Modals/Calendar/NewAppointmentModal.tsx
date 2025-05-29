import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { DatePickerModal, TimePickerModal } from 'react-native-paper-dates';
import { newAppointmentModalStyles as styles } from './NewAppointmentModal.style';

const NewAppointmentModal = ({ visible, onClose, onAdd }) => {
  const [patientID, setPatientID] = useState('');
  const [name, setName] = useState(''); // still used for display
  const [procedure, setProcedure] = useState('');
  const [date, setDate] = useState(undefined);
  const [time, setTime] = useState(undefined);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleAdd = () => {
    if (patientID && name && procedure && date && time) {
      const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      const formattedTime = `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')} ${time.hours >= 12 ? 'PM' : 'AM'}`;
      onAdd({ patientID, name, procedure, date: formattedDate, time: formattedTime });
      setPatientID('');
      setName('');
      setProcedure('');
      setDate(undefined);
      setTime(undefined);
      onClose();
    }
  };

  const getDateTimeText = () => {
    if (!date && !time) return 'Select Date & Time';
    if (date && !time) return `${date.toDateString()} - Select Time`;
    if (!date && time) return `Select Date - ${formatTime(time)}`;
    return `${date.toDateString()} ${formatTime(time)}`;
  };

  const formatTime = (time) => {
    return `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')} ${time.hours >= 12 ? 'PM' : 'AM'}`;
  };

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.container}>

          {/* Top bar */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <Text style={styles.title}>🆕 New Appointment</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#999' }}>✖</Text>
            </TouchableOpacity>
          </View>

          {/* Patient ID Input */}
          <TextInput
            placeholder="Patient ID"
            value={patientID}
            onChangeText={text => {
              setPatientID(text);
              // Optional: Lookup logic to set name
              // setName(fetchPatientNameById(text));
            }}
            style={styles.input}
          />

          {/* Read-only Patient Name */}
          <TextInput
            placeholder="Patient Name"
            value={name}
            editable={false}
            style={[styles.input, { backgroundColor: '#f0f0f0', color: '#555' }]}
          />

          <TextInput
            placeholder="Procedure"
            value={procedure}
            onChangeText={setProcedure}
            style={styles.input}
          />

          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={styles.input}
          >
            <Text style={{ color: (date || time) ? '#000' : '#aaa' }}>{getDateTimeText()}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Appointment</Text>
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
            setTimeout(() => setShowTimePicker(true), 300);
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
