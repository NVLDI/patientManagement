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
    marginBottom: 16,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
    alignItems: 'center',
  },
  dateInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    flexGrow: 1,
    minWidth: 150,
  },
  dropdownInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    flexGrow: 1,
    minWidth: 160,
  },
  filterBtn: {
    backgroundColor: '#2979FF',
    marginTop: 8,
  },
  reportGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  reportCard: {
    flexBasis: '30%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    minWidth: 220,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  reportDescription: {
    fontSize: 13,
    color: '#444',
    marginBottom: 16,
  },
  downloadRow: {
    flexDirection: 'row',
    gap: 10,
  },
  downloadBtn: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  downloadText: {
    fontSize: 13,
    fontWeight: '500',
  },
});

export default styles;
