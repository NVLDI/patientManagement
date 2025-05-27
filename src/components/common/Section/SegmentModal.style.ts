// SegmentModal.style.ts
import { StyleSheet } from 'react-native';

export const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    elevation: 5,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  patientName: {
    fontSize: 20,
    fontWeight: '700',
  },
  closeIcon: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#888',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  noteText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 10,
  },
});
