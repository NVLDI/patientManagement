import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notesList: {
    marginTop: 10,
  },
  noteItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  noteDate: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  noteText: {
    fontSize: 14,
    color: '#555',
  },
  newNoteSection: {
    marginTop: 20,
  },
  sectionTitleSmall: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  textInputArea: {
    backgroundColor: '#f1f1f1',
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    paddingLeft: 10,
    marginBottom: 10,
  },
  textPlaceholder: {
    color: '#aaa',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
  voiceButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
  },
  clearButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  printButton: {
    alignSelf: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '80%', // 🛠️ Only 80% width, not full
  },
  printButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },  
});

export default styles;
