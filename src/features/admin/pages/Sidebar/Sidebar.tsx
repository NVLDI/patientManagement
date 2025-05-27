import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Sidebar.style';

const Sidebar = () => {
  const navigation = useNavigation();

  const menuItems = [
    { icon: 'chart-box', label: 'Dashboard', screen: 'Dashboard' },
    { icon: 'account-group', label: 'User Management', screen: 'UserManagement' },
    { icon: 'cog', label: 'System Config', screen: 'SystemConfig' },
    { icon: 'chart-line', label: 'Analytics', screen: 'Analytics' },
    { icon: 'file-document-outline', label: 'Reports', screen: 'Reports' },
    { icon: 'logout', label: 'Logout', screen: 'Logout' },
  ];

  return (
    <View style={styles.container}>
      {/* Top Shield Icon */}
      <View style={styles.logoContainer}>
        <Icon name="shield-check-outline" size={36} color="#0D47A1" />
      </View>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => {
            if (item.screen !== 'Logout') {
              navigation.navigate(item.screen as never);
            } else {
              console.log('Logout pressed');
            }
          }}
        >
          <Icon name={item.icon} size={22} color="#333" style={styles.icon} />
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Sidebar;
