import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1f3f5',
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  filterInput: {
    width: 140,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  addButton: {
    backgroundColor: '#2e7d32',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  tableHeader: {
    flex: 1,
    fontWeight: '600',
  },
  tableCell: {
    flex: 1,
    color: '#333',
  },
  actionsCell: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
    gap: 10,
  },
  editText: {
    color: '#2979FF',
    marginLeft: 8,
  },
  deleteText: {
    color: '#D32F2F',
    marginLeft: 8,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  modalInput: {
    backgroundColor: '#f5f5f5',
    marginBottom: 12,
    padding: 10,
    borderRadius: 6,
  },
  modalButton: {
    marginBottom: 8,
  },
  modalCancel: {
    alignSelf: 'center',
  },
});

export const getStatusBadgeStyle = (status: string) => ({
  flex: 1,
  paddingVertical: 4,
  paddingHorizontal: 8,
  backgroundColor: status === 'Active' ? '#d4f5d2' : '#fff8b3',
  color: status === 'Active' ? '#2e7d32' : '#a67c00',
  borderRadius: 6,
  fontWeight: '500',
  textAlign: 'center',
});

export default styles;
