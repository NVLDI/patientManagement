// components/Modals/Calendar/CalendarModal.style.ts
import { StyleSheet } from 'react-native';

export const calendarModalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#999',
  },
  listItem: {
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listItemText: {
    fontSize: 14,
  },
  listItemTime: {
    fontSize: 12,
    color: '#555',
  },
});
