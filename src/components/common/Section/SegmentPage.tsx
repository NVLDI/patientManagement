// components/SegmentPage.tsx
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Animated } from 'react-native';
import { styles } from './Segment.styles';
import { modalStyles } from './SegmentModal.style';
import CalendarModal from '../Modals/Calendar/CalendarModal';
import NewAppointmentModal from '../Modals/Calendar/NewAppointmentModal';
import BlockTimeModal from '../Modals/Calendar/BlockTimeModal';

const SegmentPage = () => {
  const [appointments, setAppointments] = useState([
    {
      name: 'Mrs. Sarah Johnson',
      time: '10:00 AM',
      date: '2025-05-29',
      reason: 'Routine check-up',
      lastNote: 'Prescribed multivitamins on last visit.'
    },
    {
      name: 'Mr. Robert Chen',
      time: '11:30 AM',
      date: '2025-05-29',
      reason: 'Follow-up for blood test results',
      lastNote: 'Reviewed cholesterol levels previously.'
    },
    {
      name: 'Pt. John Doe',
      time: '03:15 PM',
      date: '2025-05-30',
      reason: 'Dental cleaning',
      lastNote: 'Complained about gum sensitivity during prior visit.'
    }
  ]);

  const [blocks, setBlocks] = useState([]);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [newModalVisible, setNewModalVisible] = useState(false);
  const [blockModalVisible, setBlockModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [activityModalVisible, setActivityModalVisible] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const activities = [
    {
      icon: '📝',
      text: 'Updated notes for',
      patient: 'Sarah Johnson',
      time: '10 mins ago'
    },
    {
      icon: '💊',
      text: 'New prescription created for',
      patient: 'John Doe',
      time: '45 mins ago'
    },
    {
      icon: '📋',
      text: 'Appointment confirmed with',
      patient: 'Robert Chen',
      time: '1 hour ago'
    }
  ];

  useEffect(() => {
    if (modalVisible || activityModalVisible) {
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
  }, [modalVisible, activityModalVisible]);

  const handleView = (appointment) => {
    setSelectedPatient(appointment);
    setModalVisible(true);
  };

  const handleActivityView = (activity) => {
    setSelectedActivity(activity);
    setActivityModalVisible(true);
  };

  const getPrefixedName = (name: string): string => {
    const hasPrefix = ['Mr.', 'Mrs.', 'Miss', 'Dr.', 'Ms.', 'Pt.'].some(prefix =>
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

                <TouchableOpacity style={[styles.Action, styles.actionStart]}>
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
          {activities.map((act, idx) => (
            <TouchableOpacity key={idx} onPress={() => handleActivityView(act)} style={styles.activityItem}>
              <Text style={styles.activityIcon}>{act.icon}</Text>
              <View>
                <Text style={styles.activityText}>
                  {act.text} <Text style={styles.bold}>{act.patient}</Text>
                </Text>
                <Text style={styles.activityTime}>{act.time}</Text>
              </View>
            </TouchableOpacity>
          ))}
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
        animationType="fade"
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
                <Text style={modalStyles.detailText}>Date: {selectedPatient.date}</Text>
                <Text style={modalStyles.detailText}>Time: {selectedPatient.time}</Text>
                <Text style={modalStyles.detailText}>Reason: {selectedPatient.reason}</Text>
                <Text style={modalStyles.noteText}>Last Note: {selectedPatient.lastNote}</Text>
              </>
            )}
          </View>
        </Animated.View>
      </Modal>

      <Modal
        transparent
        animationType="fade"
        visible={activityModalVisible}
        onRequestClose={() => setActivityModalVisible(false)}
      >
        <Animated.View style={[modalStyles.overlay, { opacity: fadeAnim }]}>
          <View style={modalStyles.container}>
            {selectedActivity && (
              <>
                <View style={modalStyles.header}>
                  <Text style={modalStyles.patientName}>{selectedActivity.icon} Activity</Text>
                  <TouchableOpacity onPress={() => setActivityModalVisible(false)}>
                    <Text style={modalStyles.closeIcon}>✕</Text>
                  </TouchableOpacity>
                </View>
                <Text style={modalStyles.detailText}>{selectedActivity.text} {selectedActivity.patient}</Text>
                <Text style={modalStyles.detailText}>Time: {selectedActivity.time}</Text>
              </>
            )}
          </View>
        </Animated.View>
      </Modal>
    </>
  );
};

export default SegmentPage;
