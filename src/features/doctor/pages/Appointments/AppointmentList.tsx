// AppointmentList.tsx
import React, { useState } from 'react';
import {
  Text, View, TouchableOpacity, ScrollView, SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import styles from './AppointmentList.style';

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const rawAppointments = [
  { date: '2025-05-28', time: '09:00 AM', name: 'James Wilson', type: 'General Checkup', status: 'Completed' },
  { date: '2025-05-28', time: '10:30 AM', name: 'Sarah Johnson', type: 'Follow-up', status: 'Waiting' },
  { date: '2025-05-30', time: '12:00 PM', name: 'Robert Chen', type: 'Lab Results', status: 'Confirmed' },
];

const getMonthDays = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = Array(firstDay).fill(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);
  return days;
};

const AppointmentList: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState('');

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = getMonthDays(year, month);

  const formatDate = (day: number) => `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  const appointmentMap = rawAppointments.reduce((acc, appt) => {
    acc[appt.date] = [...(acc[appt.date] || []), appt];
    return acc;
  }, {} as Record<string, typeof rawAppointments>);

  const filteredAppointments = selectedDay ? appointmentMap[selectedDay] || [] : [];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Appointments</Text>
        <View style={styles.buttonRow}>
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

      {/* Calendar View */}
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontWeight: '600', marginBottom: 6 }}>
          {currentDate.toLocaleString('default', { month: 'long' })} {year}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 6 }}>
          {WEEK_DAYS.map(day => (
            <Text key={day} style={{ fontWeight: '500', width: '14.28%', textAlign: 'center' }}>{day}</Text>
          ))}
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {days.map((day, idx) => {
            const dateKey = day ? formatDate(day) : '';
            const hasAppts = !!appointmentMap[dateKey];
            const isSelected = selectedDay === dateKey;
            return (
              <TouchableOpacity
                key={idx}
                onPress={() => day && setSelectedDay(dateKey)}
                style={{
                  width: '14.28%',
                  aspectRatio: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: isSelected ? '#2563eb' : 'transparent',
                  borderWidth: 0.5,
                  borderColor: '#e5e7eb',
                }}
              >
                {day && (
                  <>
                    <Text style={{ fontWeight: 'bold', color: isSelected ? '#fff' : '#000' }}>{day}</Text>
                    {hasAppts && !isSelected && (
                      <View style={{ marginTop: 2, width: 6, height: 6, borderRadius: 3, backgroundColor: '#10b981' }} />
                    )}
                  </>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Appointment List */}
      {selectedDay && (
        <View style={styles.appointmentCard}>
          <Text style={styles.sectionTitle}>Appointments on {selectedDay}</Text>
          <ScrollView>
            {filteredAppointments.map((appt, idx) => (
              <View key={idx} style={styles.appointmentRow}>
                <View>
                  <Text style={styles.appointmentTime}>{`${appt.time} - ${appt.name}`}</Text>
                  <Text style={styles.appointmentType}>{appt.type}</Text>
                </View>
                <View style={[styles.statusBadge, styles[`status${appt.status}`]]}>
                  <Text style={styles.statusText}>{appt.status}</Text>
                </View>
              </View>
            ))}
            {!filteredAppointments.length && (
              <Text style={{ textAlign: 'center', marginTop: 10, fontStyle: 'italic' }}>No appointments</Text>
            )}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default AppointmentList;
