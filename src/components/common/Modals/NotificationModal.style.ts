import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    maxHeight: '85%',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  patientId: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 4,
  },
  patientName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    marginBottom: 10,
  },
  list: {
    maxHeight: 250,
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: '#444',
  },
  time: {
    fontSize: 12,
    color: '#888',
    marginLeft: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  iconBox: {
    alignItems: 'center',
  },
  icon: {
    fontSize: 28,
  },
  tooltip: {
    fontSize: 12,
    color: '#333',
    marginTop: 4,
  },
});
