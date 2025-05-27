// components/common/Section/SegmentPage.tsx
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Animated } from 'react-native';
import { styles } from './Segment.styles';
import { modalStyles } from './SegmentModal.style';

const appointments = [
  {
    time: '09:00 AM',
    name: 'James Wilson',
    type: 'General Checkup',
    status: 'Completed',
    action: 'End',
    view: 'View',
    lastNote: 'Patient in good condition. Advised rest and hydration.',
  },
  {
    time: '10:30 AM',
    name: 'Mrs. Sarah Johnson',
    type: 'Follow-up Consultation',
    status: 'Waiting',
    action: 'Start',
    view: 'View',
    lastNote: 'Follow-up on recovery from flu. Monitor progress.',
  },
  {
    time: '11:45 AM',
    name: 'Mr. Robert Chen',
    type: 'Lab Results Review',
    status: 'Confirmed',
    action: 'Start',
    view: 'View',
    lastNote: 'Discussed cholesterol levels. Start dietary plan.',
  },
];

const activities = [
  {
    icon: '📝',
    text: 'Updated medical notes',
    patient: 'James Wilson',
    time: '15 mins ago',
  },
  {
    icon: '💊',
    text: 'Created new prescription',
    patient: 'Sarah Johnson',
    time: '1 hour ago',
  },
  {
    icon: '🧪',
    text: 'Reviewed lab results',
    patient: 'Michael Brown',
    time: 'Yesterday at 4:30 PM',
  },
];

const getPrefixedName = (name: string): string => {
  const hasPrefix = ['Mr.', 'Mrs.', 'Miss', 'Dr.', 'Ms.'].some(prefix =>
    name.startsWith(prefix)
  );
  return hasPrefix ? name : `Pt. ${name}`;
};

const SegmentPage = () => {
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

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.leftPanel}>
          <Text style={styles.sectionTitle}>Today's Appointments</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>New Appointment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Block Time</Text>
            </TouchableOpacity>
          </View>
          {appointments.map((appt, idx) => (
            <View key={idx} style={styles.appointmentCard}>
              <Text style={styles.appointmentTime}>
                {appt.time} - {appt.name}
              </Text>
              <Text style={styles.appointmentType}>{appt.type}</Text>
              <View style={styles.statusRow}>
                <Text style={[styles.statusBadge, styles[`status${appt.status}`]]}>
                  {appt.status}
                </Text>
                <TouchableOpacity style={styles.Action}>
                  <Text style={styles.link}>{appt.action}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Action} onPress={() => handleView(appt)}>
                  <Text style={styles.link}>{appt.view}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.rightPanel}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          {activities.map((act, idx) => (
            <View key={idx} style={styles.activityItem}>
              <Text style={styles.activityIcon}>{act.icon}</Text>
              <View>
                <Text style={styles.activityText}>
                  <Text style={styles.bold}>{act.text}</Text> for {act.patient}
                </Text>
                <Text style={styles.activityTime}>{act.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Modal for patient details */}
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
                <Text style={modalStyles.detailText}>
                  Type: {selectedPatient.type}
                </Text>
                <Text style={modalStyles.detailText}>
                  Status: {selectedPatient.status}
                </Text>
                <Text style={modalStyles.noteText}>
                  Last Visit Note: {selectedPatient.lastNote}
                </Text>
              </>
            )}
          </View>
        </Animated.View>
      </Modal>
    </>
  );
};

export default SegmentPage;
