import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './PatientNotes.styles'; // ⬅️ Separate style file for Notes

const PatientNotes = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Clinical Notes</Text>

      {/* Existing Notes */}
      <View style={styles.notesList}>
        <View style={styles.noteItem}>
          <Text style={styles.noteDate}>04/07/2025</Text>
          <Text style={styles.noteText}>Follow-up visit. BP stable. Advised continued medication.</Text>
        </View>
        <View style={styles.noteItem}>
          <Text style={styles.noteDate}>03/15/2025</Text>
          <Text style={styles.noteText}>Presented with recurring headaches. CT advised.</Text>
        </View>
      </View>

      {/* New Note Input */}
      <View style={styles.newNoteSection}>
        <Text style={styles.sectionTitleSmall}>New Clinical Note (Voice + Text)</Text>
        <View style={styles.textInputArea}>
          <Text style={styles.textPlaceholder}>Start typing or use voice...</Text>
        </View>
        <View style={styles.buttonRow}>
  <Pressable style={styles.voiceButton}>
    <Text style={styles.buttonText}>🎤 Voice Input</Text>
  </Pressable>
  <Pressable style={styles.clearButton}>
    <Text style={styles.buttonText}>🗑️ Clear</Text>
  </Pressable>
</View>
      </View>

      {/* Print/Save Button */}
      <Pressable style={styles.printButton}>
  <Text style={styles.printButtonText}>🖨️ Print / Save PDF</Text>
</Pressable>
    </View>
  );
};

export default PatientNotes;
