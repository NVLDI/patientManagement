import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useStyles from './Sidebar.style';

const Sidebar = ({ active, setActive }) => {
  const styles = useStyles();

  const items = [
    { key: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { key: 'appointments', label: 'Appointments', icon: '📅' },
    { key: 'patients', label: 'Patients', icon: '🧑‍⚕️' },
    { key: 'waiting', label: 'Waiting Room', icon: '⏳' },
    { key: 'billing', label: 'Billing', icon: '💳' },
  ];

  return (
    <View style={styles.sidebar}>
      <Text style={styles.logo}>🧾 <Text style={styles.logoText}>Patient Management System</Text></Text>
      <View style={styles.divider} /> 
      {items.map(item => (
        <TouchableOpacity
          key={item.key}
          style={[styles.navItem, active === item.key && styles.activeItem]}
          onPress={() => setActive(item.key)}
        >
          <Text style={[styles.navText, active === item.key && styles.activeText]}>
            {item.icon} {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Sidebar;
