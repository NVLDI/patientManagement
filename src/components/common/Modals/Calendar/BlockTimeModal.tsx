// components/Modals/BlockTimeModal.tsx
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { DatePickerModal, TimePickerModal } from 'react-native-paper-dates';
import { blockTimeModalStyles as styles } from './BlockTimeModal.style';

const BlockTimeModal = ({ visible, onClose, onBlock }) => {
  const [date, setDate] = useState(undefined);
  const [fromTime, setFromTime] = useState(undefined);
  const [toTime, setToTime] = useState(undefined);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showFromTimePicker, setShowFromTimePicker] = useState(false);
  const [showToTimePicker, setShowToTimePicker] = useState(false);

  const formatTime = (time) => {
    if (!time) return '';
    const hours = String(time.hours).padStart(2, '0');
    const minutes = String(time.minutes).padStart(2, '0');
    const period = time.hours >= 12 ? 'PM' : 'AM';
    return `${hours}:${minutes} ${period}`;
  };

  const handleBlock = () => {
    if (date && fromTime && toTime) {
      const formattedDate = date.toISOString().split('T')[0];
      onBlock({
        date: formattedDate,
        from: formatTime(fromTime),
        to: formatTime(toTime),
      });
      setDate(undefined);
      setFromTime(undefined);
      setToTime(undefined);
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>⛔ Block Time</Text>

          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
            <Text style={{ color: date ? '#000' : '#aaa' }}>
              {date ? date.toDateString() : 'Select Date'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setShowFromTimePicker(true)} style={styles.input}>
            <Text style={{ color: fromTime ? '#000' : '#aaa' }}>
              {fromTime ? `From: ${formatTime(fromTime)}` : 'Select From Time'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setShowToTimePicker(true)} style={styles.input}>
            <Text style={{ color: toTime ? '#000' : '#aaa' }}>
              {toTime ? `To: ${formatTime(toTime)}` : 'Select To Time'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleBlock} style={styles.blockButton}>
            <Text style={styles.blockButtonText}>Block Time</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        {/* Pickers */}
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
          visible={showFromTimePicker}
          onDismiss={() => setShowFromTimePicker(false)}
          onConfirm={(time) => {
            setShowFromTimePicker(false);
            setFromTime(time);
          }}
          hours={9}
          minutes={0}
        />

        <TimePickerModal
          visible={showToTimePicker}
          onDismiss={() => setShowToTimePicker(false)}
          onConfirm={(time) => {
            setShowToTimePicker(false);
            setToTime(time);
          }}
          hours={17}
          minutes={0}
        />
      </View>
    </Modal>
  );
};

export default BlockTimeModal;
