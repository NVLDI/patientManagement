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

  const formatSummary = () => {
    if (!date && !fromTime && !toTime) return 'Select Date, From & To Time';
    return `Date: ${date ? date.toDateString() : '---'} | From: ${fromTime ? formatTime(fromTime) : '--:--'} | To: ${toTime ? formatTime(toTime) : '--:--'}`;
  };

  const handleBlock = () => {
    if (date && fromTime && toTime) {
      const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
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

  const handleSequencePick = () => {
    setShowDatePicker(true);
  };

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.container}>

          {/* Top Bar */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <Text style={styles.title}>⛔ Block Time</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#999' }}>✖</Text>
            </TouchableOpacity>
          </View>

          {/* Combined Date-Time TextInput */}
          <TouchableOpacity onPress={handleSequencePick} style={[styles.input, { marginBottom: 16 }]}>
            <Text style={{ color: (date && fromTime && toTime) ? '#000' : '#aaa' }}>
              {formatSummary()}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleBlock} style={styles.blockButton}>
            <Text style={styles.blockButtonText}>Block Time</Text>
          </TouchableOpacity>
        </View>

        {/* Sequential Pickers */}
        <DatePickerModal
          locale="en"
          mode="single"
          visible={showDatePicker}
          onDismiss={() => setShowDatePicker(false)}
          date={date}
          onConfirm={({ date }) => {
            setDate(date);
            setShowDatePicker(false);
            setTimeout(() => setShowFromTimePicker(true), 300);
          }}
        />

        <TimePickerModal
          visible={showFromTimePicker}
          onDismiss={() => setShowFromTimePicker(false)}
          onConfirm={(time) => {
            setFromTime(time);
            setShowFromTimePicker(false);
            setTimeout(() => setShowToTimePicker(true), 300);
          }}
          hours={9}
          minutes={0}
        />

        <TimePickerModal
          visible={showToTimePicker}
          onDismiss={() => setShowToTimePicker(false)}
          onConfirm={(time) => {
            setToTime(time);
            setShowToTimePicker(false);
          }}
          hours={17}
          minutes={0}
        />
      </View>
    </Modal>
  );
};

export default BlockTimeModal;
