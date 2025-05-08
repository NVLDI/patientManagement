import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './PatientTimeline.styles';

const timelineData = [
  {
    date: 'April 7, 2025',
    icon: '🩺',
    title: 'Follow-up Visit',
    description: 'BP stable, continued medication advised.',
  },
  {
    date: 'April 4, 2025',
    icon: '🧠',
    title: 'CT Scan Ordered',
    description: 'CT Scan (Head) ordered due to recurring headaches.',
  },
  {
    date: 'March 30, 2025',
    icon: '💊',
    title: 'New Prescription',
    description: 'Amoxicillin 500mg for 7 days, before food.',
  },
  {
    date: 'March 15, 2025',
    icon: '📋',
    title: 'Initial Consultation',
    description: 'Presented with recurring headaches, history noted.',
  },
];

const PatientTimeline = () => {
  return (
    <ScrollView style={styles.card}>
      <Text style={styles.sectionTitle}>Patient Timeline</Text>

      <View style={styles.timelineWrapper}>
        {/* Vertical Line */}
        <View style={styles.verticalLine} />

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <View key={index} style={styles.timelineItem}>
            {/* Icon */}
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>{item.icon}</Text>
            </View>

            {/* Content */}
            <View style={styles.timelineContent}>
              <Text style={styles.dateText}>{item.date}</Text>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default PatientTimeline;
