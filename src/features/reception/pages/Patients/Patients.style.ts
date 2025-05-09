import { StyleSheet } from 'react-native';

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3f4f6',
      padding: 16,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16,
    },
    registerBtn: {
      backgroundColor: '#22c55e',
      padding: 10,
      borderRadius: 6,
    },
    searchInput: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 6,
      borderColor: '#d1d5db',
      borderWidth: 1,
    },
    btnText: {
      color: 'white',
      fontWeight: 'bold',
    },
    patientItem: {
      backgroundColor: 'white',
      padding: 12,
      borderRadius: 8,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    patientName: {
      fontWeight: '600',
      fontSize: 15,
    },
    patientSub: {
      fontSize: 13,
      color: '#6b7280',
    },
    editLink: {
      color: '#3b82f6',
      fontSize: 14,
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
      marginTop: 10,
    },
    modalSave: {
      backgroundColor: '#3b82f6',
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 6,
    },
    modalCancel: {
      backgroundColor: '#e5e7eb',
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 6,
    },
  });

export default useStyles;
