// doctor/components/Profile/Profile.style.ts

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: '500',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#222',
  },
  profileInfo: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
});

export default styles;
