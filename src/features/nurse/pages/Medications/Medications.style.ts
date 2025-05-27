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
    marginBottom: 12,
    color: '#111827',
  },
  search: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 14,
  },
  patientRow: {
    paddingVertical: 12,
    borderBottomColor: '#e5e7eb',
    borderBottomWidth: 1,
  },
  patientText: {
    fontSize: 15,
    color: '#1f2937',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  detail: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
  },
  medBlock: {
    marginBottom: 12,
    paddingLeft: 10,
  },
  medLine: {
    fontSize: 14,
    color: '#2563eb',
  },
  review: {
    fontSize: 13,
    color: '#6b7280',
    fontStyle: 'italic',
    marginTop: 2,
  },
  clearBtn: {
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  clearText: {
    color: '#ef4444',
    fontSize: 14,
  },
});
