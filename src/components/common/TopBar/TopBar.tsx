// components/common/TopBar.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './TopBar.styles';

interface TopBarProps {
  doctorName?: string;
  notifications?: number;
  initials?: string;
  onAvatarClick?: () => void;
  onBellClick?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({
  doctorName = 'Dr. Smith',
  notifications = 3,
  initials = 'DS',
  onAvatarClick = () => {},
  onBellClick = () => {},
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back, {doctorName}</Text>

      <View style={styles.rightSide}>
        {/* 🔔 Bell triggers notifications */}
        <TouchableOpacity onPress={onBellClick} style={styles.notificationContainer}>
          <Text style={styles.bell}>🔔</Text>
          {notifications > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notifications}</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* 🧑 Avatar opens profile/settings/logout */}
        <TouchableOpacity onPress={onAvatarClick} style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
