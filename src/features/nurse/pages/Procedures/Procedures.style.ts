import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  item: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  itemText: {
    fontSize: 14,
    color: '#1f2937',
  },
  detailBox: {
    backgroundColor: '#f9fafb',
    padding: 10,
    borderRadius: 6,
    marginTop: 4,
    marginBottom: 10,
  },
  detailLine: {
    fontSize: 13,
    color: '#4b5563',
    marginBottom: 6,
  },
  instrument: {
    fontSize: 13,
    color: '#374151',
    marginLeft: 10,
    marginBottom: 2,
  },
});
