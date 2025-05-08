import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#e53935',
    marginBottom: 10,
  },
  message: {
    fontSize: 20,
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1e88e5',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  label: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default styles;
