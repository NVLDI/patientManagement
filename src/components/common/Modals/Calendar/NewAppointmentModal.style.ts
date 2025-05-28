// components/Modals/NewAppointmentModal.style.ts
import { StyleSheet } from 'react-native';

export const newAppointmentModalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  container: {
    width: '85%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 8
  },
  addButton: {
    backgroundColor: '#3366ff',
    padding: 12,
    borderRadius: 8
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600'
  },
  cancelText: {
    marginTop: 10,
    alignSelf: 'flex-end',
    color: '#999',
    fontWeight: '600'
  }
});
