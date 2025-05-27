import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './Integrations.style';

const Integrations: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>🔗 Integrations</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Google Calendar</Text>
        <Text style={styles.description}>Sync appointments with Google Calendar.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>AWS HealthLake</Text>
        <Text style={styles.description}>Connect and sync medical data with AWS HealthLake.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Twilio SMS</Text>
        <Text style={styles.description}>Enable SMS reminders and appointment confirmations.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Stripe Billing</Text>
        <Text style={styles.description}>Automate and manage your billing through Stripe.</Text>
      </View>
    </ScrollView>
  );
};

export default Integrations;
