import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface AppointmentDay {
  day: number;
  appointments: number;
}

const Calendar: React.FC = () => {
  // State for view mode (Day, Week, Month)
  const [viewMode, setViewMode] = useState<'Day' | 'Week' | 'Month'>('Month');
  
  // Example data for days with appointments
  const appointmentDays: { [key: number]: AppointmentDay } = {
    4: { day: 4, appointments: 3 },
    12: { day: 12, appointments: 2 },
  };

  // Generate days for the calendar grid
  const generateDays = () => {
    const days = [];
    const daysInMonth = 30; // For this example, we're using 30 days
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  // Days of the week headers
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const days = generateDays();
  
  // Render each day cell
  const renderDay = (day: number) => {
    const hasAppointments = appointmentDays[day];
    const isHighlighted = hasAppointments !== undefined;
    
    return (
      <TouchableOpacity 
        key={day} 
        style={[
          styles.dayCell,
          isHighlighted && styles.highlightedDay
        ]}
      >
        <Text style={styles.dayNumber}>{day}</Text>
        {hasAppointments && (
          <Text style={styles.appointmentCount}>
            {hasAppointments.appointments} Appointment{hasAppointments.appointments > 1 ? 's' : ''}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Appointments</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.switchButton}>
            <View style={styles.switchThumb} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rescheduleButton}>
            <Text style={styles.rescheduleButtonText}>🔄 Reschedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blockButton}>
            <Text style={styles.blockButtonText}>⬜ Block Time</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Calendar Header */}
      <View style={styles.calendarHeader}>
        <Text style={styles.calendarTitle}>Calendar</Text>
        <View style={styles.viewSelector}>
          <TouchableOpacity 
            style={[styles.viewButton, viewMode === 'Day' && styles.selectedViewButton]}
            onPress={() => setViewMode('Day')}
          >
            <Text style={[styles.viewButtonText, viewMode === 'Day' && styles.selectedViewText]}>Day</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.viewButton, viewMode === 'Week' && styles.selectedViewButton]}
            onPress={() => setViewMode('Week')}
          >
            <Text style={[styles.viewButtonText, viewMode === 'Week' && styles.selectedViewText]}>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.viewButton, viewMode === 'Month' && styles.selectedViewButton]}
            onPress={() => setViewMode('Month')}
          >
            <Text style={[styles.viewButtonText, viewMode === 'Month' && styles.selectedViewText]}>Month</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Weekday Headers */}
      <View style={styles.weekdayHeader}>
        {weekDays.map((day) => (
          <View key={day} style={styles.weekdayCell}>
            <Text style={styles.weekdayText}>{day}</Text>
          </View>
        ))}
      </View>
      
      {/* Calendar Grid */}
      <ScrollView style={styles.calendarContainer}>
        <View style={styles.calendarGrid}>
          {days.map((day) => renderDay(day))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 24,
    backgroundColor: '#f5f6fa',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchButton: {
    width: 40,
    height: 24,
    backgroundColor: '#3a82f7',
    borderRadius: 12,
    marginRight: 12,
    padding: 2,
  },
  switchThumb: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: '#4caf50',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  rescheduleButton: {
    backgroundColor: '#f5c518',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  rescheduleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  blockButton: {
    backgroundColor: '#f44336',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  blockButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewSelector: {
    flexDirection: 'row',
    backgroundColor: '#e9ecf6',
    borderRadius: 8,
    overflow: 'hidden',
  },
  viewButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  selectedViewButton: {
    backgroundColor: '#3a82f7',
  },
  viewButtonText: {
    color: '#666',
    fontWeight: '500',
  },
  selectedViewText: {
    color: '#fff',
  },
  weekdayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  weekdayCell: {
    flex: 1,
    alignItems: 'center',
  },
  weekdayText: {
    fontWeight: '500',
    color: '#666',
  },
  calendarContainer: {
    flex: 1,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  dayCell: {
    width: '14.28%', // 7 days per row
    aspectRatio: 1,
    padding: 4,
    marginBottom: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  highlightedDay: {
    backgroundColor: '#e6f0ff',
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: '500',
  },
  appointmentCount: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default Calendar;
