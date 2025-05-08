// components/common/Section/SegmentPage.tsx
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './Segment.styles';

const appointments = [
  {
    time: '09:00 AM',
    name: 'James Wilson',
    type: 'General Checkup',
    status: 'Completed',
    action: 'View',
  },
  {
    time: '10:30 AM',
    name: 'Sarah Johnson',
    type: 'Follow-up Consultation',
    status: 'Waiting',
    action: 'Start',
  },
  {
    time: '11:45 AM',
    name: 'Robert Chen',
    type: 'Lab Results Review',
    status: 'Confirmed',
    action: 'View',
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

const SegmentPage = () => {
  return (
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
            <Text style={styles.appointmentTime}>{appt.time} - {appt.name}</Text>
            <Text style={styles.appointmentType}>{appt.type}</Text>
            <View style={styles.statusRow}>
              <Text style={[styles.statusBadge, styles[`status${appt.status}`]]}>{appt.status}</Text>
              <Text style={styles.link}>{appt.action}</Text>
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
  );
};

export default SegmentPage;
