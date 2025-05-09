import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import useStyles from './ReceptionDashboard.style';

const times = [
  '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM', '09:00 AM',
  '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
];

const operators = [
  'Hygiene 1', 'Hygiene 2', 'Surgery 1', 'Surgery 2', 'Surgery 3', 'Pros 1',
];

const ReceptionDashboard = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Reception Dashboard</Text>
        <Text style={styles.date}>📅 Tuesday, July 2, 2024</Text>
      </View>

      {/* Scrollable Grid */}
      <View style={styles.scrollWrapper}>
        <ScrollView horizontal contentContainerStyle={styles.grid}>
          {/* Time Column */}
          <View style={styles.timeColumn}>
            {times.map((time) => (
              <View key={time} style={styles.timeSlot}>
                <Text style={styles.timeText}>{time}</Text>
              </View>
            ))}
          </View>

          {/* Operator Columns */}
          {operators.map((operator, index) => (
            <View key={index} style={styles.operatorColumn}>
              <View style={styles.operatorHeader}>
                <Text style={styles.operatorHeaderText}>{operator}</Text>
              </View>
              {times.map((_, idx) => (
                <View key={idx} style={styles.slot}>
                  {idx === 1 ? (
                    <View style={styles.appointmentCard}>
                      <Text style={styles.appointmentName}>Olivia Heckbert</Text>
                      <Text style={styles.appointmentText}>Dr. Louie Al-Faraje</Text>
                      <Text style={styles.appointmentText}>CDT: D2740</Text>
                      <Text style={styles.appointmentText}>Phone: (619) 881-7889</Text>
                      <Text style={styles.appointmentText}>olivia.heckbert@email.com</Text>
                      <Text style={styles.appointmentTag}>🗓 Consultation</Text>
                    </View>
                  ) : null}
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ReceptionDashboard;
