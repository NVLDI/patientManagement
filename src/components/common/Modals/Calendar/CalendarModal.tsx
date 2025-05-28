// components/Modals/Calendar/CalendarModal.tsx
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { calendarModalStyles as styles } from './CalendarModal.style';

const CalendarModal = ({ visible, onClose, markedDates, appointments = [], blocks = [] }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const dayAppointments = appointments.filter(
    item => item.date === selectedDate
  );
  const dayBlocks = blocks.filter(
    item => item.date === selectedDate
  );

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>📅 Calendar</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeIcon}>✕</Text>
            </TouchableOpacity>
          </View>

          <Calendar
            onDayPress={day => setSelectedDate(day.dateString)}
            markedDates={markedDates}
            markingType={'dot'}
          />

          {selectedDate && (
            <View>
              <Text style={[styles.title, { marginTop: 16 }]}>🗓 {selectedDate}</Text>
              {dayAppointments.map((item, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.listItemText}>👤 {item.name}</Text>
                  <Text style={styles.listItemTime}>🕒 {item.time}</Text>
                </View>
              ))}
              {dayBlocks.map((item, index) => (
                <View key={`block-${index}`} style={styles.listItem}>
                  <Text style={styles.listItemText}>⛔ Blocked Time</Text>
                  <Text style={styles.listItemTime}>🕒 {item.time}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default CalendarModal;