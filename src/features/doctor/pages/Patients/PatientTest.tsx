import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './PatientTest.styles'; // 👈 (Separate style file for tests)

const PatientTest = () => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Test Results</Text>
        <Pressable style={styles.orderButton}>
          <Text style={styles.orderButtonText}>+ Order New Test</Text>
        </Pressable>
      </View>

      {/* Existing Tests */}
      <View style={styles.testList}>
        <View style={styles.testItem}>
          <Text style={styles.testTitle}><Text style={{ fontWeight: 'bold' }}>Blood Panel</Text> – Normal</Text>
          <Text style={styles.testDate}>March 28, 2025</Text>
        </View>
        <View style={styles.testItem}>
          <Text style={styles.testTitle}><Text style={{ fontWeight: 'bold' }}>CT Scan (Head)</Text> – Pending</Text>
          <Text style={styles.testDate}>April 4, 2025</Text>
        </View>
      </View>

      {/* New Test Order Section */}
      <View style={styles.newTestSection}>
        <Text style={styles.newTestTitle}>New Test Order</Text>
        <Text style={styles.newTestLabel}>Enter Test Instructions / Parameters</Text>
        <View style={styles.textInputArea}>
          <Text style={styles.textPlaceholder}>e.g., Fasting required, scan area, specific markers...</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <Pressable style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </Pressable>
          <Pressable style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Next</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PatientTest;
