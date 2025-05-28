// components/SegmentPage.tsx
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Animated } from 'react-native';
import { styles } from './Segment.styles';
import { modalStyles } from './SegmentModal.style';
import CalendarModal from '../Modals/Calendar/CalendarModal';
import NewAppointmentModal from '../Modals/Calendar/NewAppointmentModal';
import BlockTimeModal from '../Modals/Calendar/BlockTimeModal';

const SegmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [newModalVisible, setNewModalVisible] = useState(false);
  const [blockModalVisible, setBlockModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [modalVisible]);

  const handleView = (appointment) => {
    setSelectedPatient(appointment);
    setModalVisible(true);
  };

  const getPrefixedName = (name: string): string => {
    const hasPrefix = ['Mr.', 'Mrs.', 'Miss', 'Dr.', 'Ms.'].some(prefix =>
      name.startsWith(prefix)
    );
    return hasPrefix ? name : `Pt. ${name}`;
  };

  const markedDates = appointments.reduce((acc, item) => {
    acc[item.date] = { marked: true, dotColor: 'blue' };
    return acc;
  }, {});
  blocks.forEach(item => {
    markedDates[item.date] = { marked: true, dotColor: 'red' };
  });

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.leftPanel}>
          <Text style={styles.sectionTitle}>Today's Appointments</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => setCalendarVisible(true)}>
              <Text style={styles.buttonText}>View Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setNewModalVisible(true)}>
              <Text style={styles.buttonText}>New Appointment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setBlockModalVisible(true)}>
              <Text style={styles.buttonText}>Block Time</Text>
            </TouchableOpacity>
          </View>

          {appointments.map((appt, idx) => (
            <View key={idx} style={styles.appointmentCard}>
              <Text style={styles.appointmentTime}>
                {appt.time} - {appt.name}
              </Text>
              <Text style={styles.appointmentType}>Scheduled</Text>
              <View style={styles.statusRow}>
                <Text style={[styles.statusBadge, styles.statusConfirmed]}>Confirmed</Text>

                <TouchableOpacity
                  style={[styles.Action, styles.actionStart]}
                >
                  <Text style={[styles.link, styles.textStart]}>Start</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Action} onPress={() => handleView(appt)}>
                  <Text style={styles.link}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.rightPanel}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
        </View>
      </ScrollView>

      <CalendarModal
        visible={calendarVisible}
        onClose={() => setCalendarVisible(false)}
        markedDates={markedDates}
        appointments={appointments}
        blocks={blocks}
      />

      <NewAppointmentModal
        visible={newModalVisible}
        onClose={() => setNewModalVisible(false)}
        onAdd={(appt) => setAppointments([...appointments, appt])}
      />

      <BlockTimeModal
        visible={blockModalVisible}
        onClose={() => setBlockModalVisible(false)}
        onBlock={(block) => setBlocks([...blocks, block])}
      />

      <Modal
        transparent
        animationType="none"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Animated.View style={[modalStyles.overlay, { opacity: fadeAnim }]}>
          <View style={modalStyles.container}>
            {selectedPatient && (
              <>
                <View style={modalStyles.header}>
                  <Text style={modalStyles.patientName}>
                    {getPrefixedName(selectedPatient.name)}
                  </Text>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={modalStyles.closeIcon}>✕</Text>
                  </TouchableOpacity>
                </View>
                <Text style={modalStyles.detailText}>
                  Time: {selectedPatient.time}
                </Text>
                <Text style={modalStyles.detailText}>Date: {selectedPatient.date}</Text>
              </>
            )}
          </View>
        </Animated.View>
      </Modal>
    </>
  );
};

export default SegmentPage;
