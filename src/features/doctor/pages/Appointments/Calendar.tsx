import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const DAYS_IN_WEEK = 7;
const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Example appointments per day
  const appointmentDays: Record<string, number> = {
    '2025-05-04': 3,
    '2025-05-12': 2,
    '2025-05-21': 1,
  };

  const getDaysArray = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days = [];

    const firstDay = date.getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    // Fill leading blanks
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Fill actual days
    for (let i = 1; i <= lastDate; i++) {
      days.push(i);
    }

    return days;
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthDays = getDaysArray(year, month);

  const handleChangeMonth = (offset: number) => {
    const newDate = new Date(currentDate.setMonth(month + offset));
    setCurrentDate(new Date(newDate));
  };

  const formatKey = (d: number) => `${year}-${(month + 1).toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleChangeMonth(-1)}>
          <Text style={styles.navText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {currentDate.toLocaleString('default', { month: 'long' })} {year}
        </Text>
        <TouchableOpacity onPress={() => handleChangeMonth(1)}>
          <Text style={styles.navText}>→</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.weekdayRow}>
        {WEEK_DAYS.map((d) => (
          <Text key={d} style={styles.weekdayText}>{d}</Text>
        ))}
      </View>

      <ScrollView>
        <View style={styles.grid}>
          {monthDays.map((day, idx) => {
            const key = formatKey(day ?? 1);
            const count = day && appointmentDays[key];

            return (
              <View key={idx} style={styles.dayCell}>
                {day ? (
                  <>
                    <Text style={styles.dayNumber}>{day}</Text>
                    {count && (
                      <Text style={styles.appointmentCount}>
                        {count} Appointment{count > 1 ? 's' : ''}
                      </Text>
                    )}
                  </>
                ) : null}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  headerText: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  navText: { fontSize: 24, color: '#3a82f7' },
  weekdayRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#e0e0e0',
  },
  weekdayText: { width: '14.28%', textAlign: 'center', fontWeight: '600' },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 4,
  },
  dayCell: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#e0e0e0',
    backgroundColor: '#ffffff',
    padding: 4,
  },
  dayNumber: { fontSize: 16, fontWeight: 'bold' },
  appointmentCount: {
    fontSize: 10,
    marginTop: 2,
    textAlign: 'center',
    color: '#555',
  },
});

export default Calendar;
