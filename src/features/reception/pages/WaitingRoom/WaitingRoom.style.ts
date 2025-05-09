import { StyleSheet } from 'react-native';

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3f4f6',
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 12,
    },
    buttonRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 20,
    },
    checkIn: {
      backgroundColor: '#22c55e',
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 6,
    },
    viewList: {
      backgroundColor: '#3b82f6',
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 6,
    },
    notify: {
      backgroundColor: '#f59e0b',
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 6,
    },
    checkOut: {
      backgroundColor: '#ef4444',
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 6,
    },
    btnText: {
      color: 'white',
      fontWeight: 'bold',
    },
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 12,
      marginBottom: 10,
      borderRadius: 8,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: '600',
    },
    cardSub: {
      fontSize: 13,
      color: '#6b7280',
    },
    removeBtn: {
      fontSize: 18,
      color: '#ef4444',
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      width: '85%',
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    input: {
      backgroundColor: '#f9fafb',
      borderColor: '#d1d5db',
      borderWidth: 1,
      padding: 10,
      borderRadius: 6,
      marginBottom: 10,
    },
    modalActions: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: 10,
    },
    cancelBtn: {
      backgroundColor: '#e5e7eb',
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 6,
    },
    saveBtn: {
      backgroundColor: '#3b82f6',
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 6,
    },
  });

export default useStyles;
