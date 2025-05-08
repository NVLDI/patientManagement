import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 8,
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  newPrescriptionButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  newPrescriptionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  prescriptionList: {
    marginBottom: 20,
  },
  prescriptionItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  prescriptionTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  prescriptionDetails: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  prescriptionDate: {
    fontSize: 12,
    color: '#888',
  },
  newPrescriptionSection: {
    marginTop: 20,
  },
  newPrescriptionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007bff',
    marginBottom: 12,
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 12,
  },
  tableRowHeader: {
    flexDirection: 'row',
    backgroundColor: '#f1f5f9',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  tableCellHeader: {
    flex: 1,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  headerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  tableCellLarge: {
    width: 557,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  tableCellMedium: {
    width: 250,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  tableCellSmall: {
    width: 130,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  inputField: {
    width: '90%',
    height: 32,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  pickerWrapper: {
    width: '90%',
    height: 32,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 4,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
    height: '100%',
  },
  addMedicationButton: {
    backgroundColor: '#e0e7ff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  addMedicationButtonText: {
    fontWeight: '600',
    color: '#3b82f6',
  },
  sendToPharmacyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  sendToPharmacyText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
  },
  bottomButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  cancelButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#28a745',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  checkboxEmpty: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  checkboxChecked: {
    width: 16,
    height: 16,
    backgroundColor: '#007bff',
    borderRadius: 3,
  },
  deleteAction: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default styles;
