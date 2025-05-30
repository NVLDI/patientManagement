import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
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
  newInvoiceButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  newInvoiceButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  outstandingBalance: {
    fontSize: 16,
    color: '#dc3545',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  invoiceList: {
    marginBottom: 20,
  },
  invoiceItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  invoiceDate: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  invoiceTitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  invoiceAmountPaid: {
    fontSize: 14,
    color: '#28a745',
    fontWeight: 'bold',
  },
  invoiceAmountUnpaid: {
    fontSize: 14,
    color: '#dc3545',
    fontWeight: 'bold',
  },
  newInvoiceSection: {
    marginTop: 20,
  },
  newInvoiceTitle: {
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
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tableCellLarge: {
    width: 300,  // Description
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 4,
  },
  tableCellMedium: {
    width: 120,  // Unit Cost, Total
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 4,
  },
  tableCellSmall: {
    width: 80,   // Qty, Action
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 4,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  inputField: {
    width: '100%',
    height: 32,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  deleteAction: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  addItemButton: {
    backgroundColor: '#e0e7ff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  addItemButtonText: {
    fontWeight: '600',
    color: '#3b82f6',
  },
  taxDiscountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  taxDiscountInput: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 8,
    width: '48%',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  cancelButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
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
    flex: 0.48,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  patientCard: {
  backgroundColor: '#ffffff',
  padding: 16,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#e5e7eb',
  marginBottom: 12,
},
patientName: {
  fontSize: 18,
  fontWeight: '600',
},
patientDetails: {
  color: '#374151',
},

});

export default styles;
