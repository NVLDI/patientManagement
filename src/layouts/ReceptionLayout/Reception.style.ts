
import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    sidebar: {
      backgroundColor: '#ffffff',
      paddingTop: 32,
      paddingHorizontal: 16,
      borderRightWidth: 1,
      borderColor: '#e5e7eb',
      width: 250,
      height: '100%',
    },
    logo: {
      marginBottom: 24,
      alignItems: 'center',
    },
    logoText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1e40af',
    },
    navItem: {
      flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius: 10,
    },
    navText: {
      fontSize: 16,
      color: '#374151',
    },
    activeItem: {
      backgroundColor: '#e0f2fe',
    },
    activeText: {
      color: '#0284c7',
      fontWeight: 'bold',
    },
  });
