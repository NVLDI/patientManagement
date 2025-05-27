import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  heroImage: {
    height: 420,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  heroTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#eee',
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaButton: {
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 8,
    backgroundColor: '#1e88e5',
  },
  secondaryButton: {
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderColor: '#fff',
    marginLeft: 10,
  },
  ctaLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  section: {
    padding: 25,
    backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#2c3e50',
  },
  sectionItem: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
    color: '#34495e',
  },
  testimonialBanner: {
    backgroundColor: '#e3f2fd',
    padding: 30,
    alignItems: 'center',
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  quoteAuthor: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1976d2',
  },
  footerArea: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  footer: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
});

export default styles;
  