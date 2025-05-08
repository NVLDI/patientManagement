import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from './NavBar.style';

interface NavBarProps {
  currentTab?: string;
  onTabChange?: (tabName: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({
  currentTab = 'Dashboard',
  onTabChange = () => {},
}) => {
  const [isVisible, setIsVisible] = useState(true); // Drawer visibility state
  const slideAnim = useRef(new Animated.Value(-250)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : -250,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  const navItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'appointments', icon: '📅', label: 'Appointments' },
    { id: 'patient', icon: '👨', label: 'Patient Record' },
    { id: 'prescription', icon: '💊', label: 'Prescription' },
    { id: 'analytics', icon: '📈', label: 'Analytics' },
    { id: 'bills', icon: '💵', label: 'Bills' },
    { id: 'whatsapp', icon: '💬', label: 'Whatsapp' },
  ];

  // Toggle drawer function
  const toggleDrawer = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.toggleButton} // Style the toggle button as you like
        onPress={toggleDrawer}
      >
        <Text style={styles.toggleButtonText}>{isVisible ? 'Close' : 'Open'} Drawer</Text>
      </TouchableOpacity>

      <Animated.View
        style={[styles.drawerContainer, { transform: [{ translateX: slideAnim }] }]}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logoIcon}>🏥</Text>
        </View>

        <View style={styles.navItemsContainer}>
          {navItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.navItem,
                currentTab === item.label && styles.activeNavItem,
              ]}
              onPress={() => onTabChange(item.label)}
            >
              <Text style={styles.navIcon}>{item.icon}</Text>
              <Text
                style={[
                  styles.navLabel,
                  currentTab === item.label && styles.activeNavLabel,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    </>
  );
};

export default NavBar;
