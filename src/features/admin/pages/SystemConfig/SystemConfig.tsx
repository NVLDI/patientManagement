import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Text, Switch } from 'react-native-paper';
import styles from './SystemConfig.style';

const SystemConfig = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    maintenance: false,
    backup: true,
    darkMode: false,
    enable2FA: true,
    sessionTimeout: '15',
    maxLoginAttempts: '5',
    language: 'en',
    cache: true,
    maxUploadSize: '20',
    lazyLoad: true,
    auditLogs: true,
    logRetention: '30',
    emailAlerts: false,
    version: 'v1.3.2',
  });

  const toggleSwitch = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const updateValue = (key: keyof typeof settings, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Patient Management System Admin</Text>
      <Text style={styles.subHeader}>System Configuration</Text>

      <View style={styles.panel}>
        {/* GENERAL */}
        <Text style={styles.sectionTitle}>General</Text>
        {[
          ['Enable Notifications', 'notifications'],
          ['Maintenance Mode', 'maintenance'],
          ['Auto Backup', 'backup'],
        ].map(([label, key]) => (
          <View key={key} style={styles.settingRow}>
            <Text style={styles.settingLabel}>{label}</Text>
            <Switch
              value={settings[key as keyof typeof settings] as boolean}
              onValueChange={() => toggleSwitch(key as keyof typeof settings)}
            />
          </View>
        ))}

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>App Version</Text>
          <Text style={styles.readOnlyText}>{settings.version}</Text>
        </View>

        {/* SECURITY */}
        <Text style={styles.sectionTitle}>Security</Text>
        {[
          ['Enable Two-Factor Authentication', 'enable2FA'],
        ].map(([label, key]) => (
          <View key={key} style={styles.settingRow}>
            <Text style={styles.settingLabel}>{label}</Text>
            <Switch
              value={settings[key as keyof typeof settings] as boolean}
              onValueChange={() => toggleSwitch(key as keyof typeof settings)}
            />
          </View>
        ))}

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Max Login Attempts</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={settings.maxLoginAttempts}
            onChangeText={text => updateValue('maxLoginAttempts', text)}
          />
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Session Timeout (mins)</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={settings.sessionTimeout}
            onChangeText={text => updateValue('sessionTimeout', text)}
          />
        </View>

        {/* UI SETTINGS */}
        <Text style={styles.sectionTitle}>UI & Display</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch
            value={settings.darkMode}
            onValueChange={() => toggleSwitch('darkMode')}
          />
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Language</Text>
          <TextInput
            placeholder="en / es / fr"
            value={settings.language}
            onChangeText={text => updateValue('language', text)}
            style={styles.input}
          />
        </View>

        {/* PERFORMANCE */}
        <Text style={styles.sectionTitle}>Performance</Text>
        {[
          ['Enable Cache', 'cache'],
          ['Enable Lazy Load', 'lazyLoad'],
        ].map(([label, key]) => (
          <View key={key} style={styles.settingRow}>
            <Text style={styles.settingLabel}>{label}</Text>
            <Switch
              value={settings[key as keyof typeof settings] as boolean}
              onValueChange={() => toggleSwitch(key as keyof typeof settings)}
            />
          </View>
        ))}

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Max Upload Size (MB)</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={settings.maxUploadSize}
            onChangeText={text => updateValue('maxUploadSize', text)}
          />
        </View>

        {/* LOGGING */}
        <Text style={styles.sectionTitle}>Audit & Logging</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Enable Audit Logs</Text>
          <Switch
            value={settings.auditLogs}
            onValueChange={() => toggleSwitch('auditLogs')}
          />
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Log Retention Days</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={settings.logRetention}
            onChangeText={text => updateValue('logRetention', text)}
          />
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Admin Log Email Alerts</Text>
          <Switch
            value={settings.emailAlerts}
            onValueChange={() => toggleSwitch('emailAlerts')}
          />
        </View>
      </View>
    </View>
  );
};

export default SystemConfig;
