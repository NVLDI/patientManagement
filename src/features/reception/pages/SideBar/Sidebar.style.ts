import { StyleSheet } from 'react-native';

const useStyles = () =>
  StyleSheet.create({
    sidebar: {
      backgroundColor: '#fff',
      paddingVertical: 24,
      paddingHorizontal: 12,
      borderRightWidth: 1,
      borderColor: '#e5e7eb',
      width: 200,
      height: '100%',
    },
    logo: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#3b82f6',
      marginBottom: 12,
    },
    logoText: {
      color: '#1e40af',
    },
    divider: {
      height: 1,
      backgroundColor: '#e5e7eb',
      marginBottom: 16,
    },
    navItem: {
      paddingVertical: 10,
      paddingHorizontal: 8,
      borderRadius: 6,
      marginBottom: 6,
    },
    navText: {
      fontSize: 14,
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

export default useStyles;
