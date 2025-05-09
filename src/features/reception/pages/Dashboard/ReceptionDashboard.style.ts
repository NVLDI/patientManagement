import { StyleSheet } from 'react-native';

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 12,
      width: '100%',
      height: '100%',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#1f2937',
    },
    date: {
      fontSize: 14,
      color: '#6b7280',
    },
    scrollWrapper: {
      flex: 1,
      width: '100%',
    },
    grid: {
      flexDirection: 'row',
      minWidth: '100%',
    },
    timeColumn: {
      width: 80,
      borderRightWidth: 1,
      borderColor: '#e5e7eb',
    },
    timeSlot: {
      height: 60,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: 6,
    },
    timeText: {
      fontSize: 12,
      color: '#6b7280',
    },
    operatorColumn: {
      flexGrow: 1,
      minWidth: 160,
      borderRightWidth: 1,
      borderColor: '#e5e7eb',
    },
    operatorHeader: {
      backgroundColor: '#fef3c7',
      paddingVertical: 8,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#e5e7eb',
    },
    operatorHeaderText: {
      fontSize: 12,
      fontWeight: '600',
    },
    slot: {
      height: 60,
      borderBottomWidth: 1,
      borderColor: '#f3f4f6',
      padding: 4,
    },
    appointmentCard: {
      backgroundColor: '#f3e8ff',
      borderColor: '#d8b4fe',
      borderWidth: 1,
      borderRadius: 8,
      padding: 6,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    appointmentName: {
      fontWeight: 'bold',
      fontSize: 12,
    },
    appointmentText: {
      fontSize: 11,
      color: '#4b5563',
    },
    appointmentTag: {
      fontSize: 11,
      marginTop: 4,
      color: '#047857',
      fontWeight: '600',
    },
  });

export default useStyles;
