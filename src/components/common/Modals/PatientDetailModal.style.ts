import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalContent: {
    position: 'relative',
    width: '95%',
    maxWidth: 1000,
    maxHeight: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  closeIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
  },
  invoiceItem: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  createInvoiceScroll: {
    maxHeight: 220,
    paddingVertical: 8,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tableCellLarge: {
    flex: 2.5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginRight: 8,
    backgroundColor: '#fff',
  },
  tableCellMedium: {
    flex: 1.2,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginRight: 8,
    backgroundColor: '#fff',
  },
  pickerCell: {
    flex: 1.4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginRight: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  picker: {
    height: 38,
    width: '100%',
  },
  tableCellSmall: {
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteAction: {
    color: 'red',
    fontSize: 20,
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
    marginTop: 16,
  },
  cancelButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 12,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  serialCell: {
  width: 30,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 8,
},
tableCellSmallInput: {
  width: 100,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 6,
  paddingHorizontal: 8,
  paddingVertical: 6,
  marginRight: 8,
  backgroundColor: '#fff',
},

});

export default styles;
