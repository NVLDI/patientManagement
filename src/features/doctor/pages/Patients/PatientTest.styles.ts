import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  orderButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  testList: {
    marginBottom: 20,
  },
  testItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  testTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  testDate: {
    fontSize: 12,
    color: '#888',
  },
  newTestSection: {
    marginTop: 20,
  },
  newTestTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007bff',
    marginBottom: 8,
  },
  newTestLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  textInputArea: {
    backgroundColor: '#f1f1f1',
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    paddingLeft: 10,
    marginBottom: 20,
  },
  textPlaceholder: {
    color: '#aaa',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 0.48,
  },
  backButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 0.48,
  },
  nextButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
