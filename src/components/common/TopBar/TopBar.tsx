// components/common/TopBar.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './TopBar.styles';
interface TopBarProps {
  doctorName?: string;
  notifications?: number;
  initials?: string;
}

const TopBar: React.FC<TopBarProps> = ({
  doctorName = 'Dr. Smith',
  notifications = 3,
  initials = 'DS',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back, {doctorName}</Text>

      <View style={styles.rightSide}>
        <TouchableOpacity style={styles.notificationContainer}>
          <Text style={styles.bell}>🔔</Text>
          {notifications > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notifications}</Text>
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
      </View>
    </View>
  );
};

export default TopBar;
