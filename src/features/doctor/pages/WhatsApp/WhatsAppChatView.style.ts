import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  doctor: {
    textAlign: 'right',
    backgroundColor: '#dcf8c6',
    marginVertical: 2,
    padding: 8,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  patient: {
    textAlign: 'left',
    backgroundColor: '#fff',
    marginVertical: 2,
    padding: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
});

export default styles;
