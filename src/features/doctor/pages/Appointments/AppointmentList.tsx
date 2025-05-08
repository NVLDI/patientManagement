// AppointmentList.tsx 
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import styles from './AppointmentList.style';

const appointments = [
  {
    time: '09:00 AM',
    name: 'James Wilson',
    type: 'General Checkup',
    status: 'Completed',
    statusColor: styles.statusCompleted,
  },
  {
    time: '10:30 AM',
    name: 'Sarah Johnson',
    type: 'Follow-up',
    status: 'Waiting',
    statusColor: styles.statusWaiting,
  },
  {
    time: '12:00 PM',
    name: 'Robert Chen',
    type: 'Lab Results',
    status: 'Confirmed',
    statusColor: styles.statusConfirmed,
  },
];

export default function AppointmentList() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Appointments</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.toggleButton, isToggled && styles.toggleButtonActive]}
            onPress={() => setIsToggled(!isToggled)}
          >
            <Ionicons
              name={isToggled ? 'toggle' : 'toggle-outline'}
              size={20}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.greenButton}>
            <Ionicons name="add" size={16} color="white" />
            <Text style={styles.buttonText}> Add</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.yellowButton}>
            <Ionicons name="refresh" size={16} color="white" />
            <Text style={styles.buttonText}> Reschedule</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.redButton}>
            <Ionicons name="remove-circle" size={16} color="white" />
            <Text style={styles.buttonText}> Block Time</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.appointmentCard}>
        <Text style={styles.sectionTitle}>Today's Appointments</Text>
        <ScrollView>
          {appointments.map((appt, index) => (
            <View key={index} style={styles.appointmentRow}>
              <View>
                <Text style={styles.appointmentTime}>{`${appt.time} - ${appt.name}`}</Text>
                <Text style={styles.appointmentType}>{appt.type}</Text>
              </View>
              <View style={[styles.statusBadge, appt.statusColor]}>
                <Text style={styles.statusText}>{appt.status}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
