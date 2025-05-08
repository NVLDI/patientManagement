import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: 250,
    marginBottom: 30,
    borderRadius: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  ctaButton: {
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 6,
    backgroundColor: '#1e88e5',
  },
  ctaLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  footer: {
    padding: 16,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  },
});

export default styles;
