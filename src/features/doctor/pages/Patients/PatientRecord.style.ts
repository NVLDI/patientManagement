// PatientRecord.style.ts

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6', // Tailwind's bg-gray-100
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  list: {
    marginTop: 16,
  },
  patientCard: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#ffffff',
    marginBottom: 8,
  },
  selectedPatientCard: {
    backgroundColor: '#e0f2fe', // Tailwind's bg-blue-100
  },
  patientName: {
    fontSize: 18,
    fontWeight: '600',
  },
  patientDetails: {
    color: '#374151', // Tailwind's text-gray-700
  },
  newPatientButtonContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  newPatientButton: {
    backgroundColor: '#16a34a', // Tailwind's green-600
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  newPatientText: {
    color: '#ffffff',
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default styles;
