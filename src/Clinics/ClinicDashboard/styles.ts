import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dashboardContainer: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    flexGrow: 1,
  },
  dashboardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#444',
  },
  value: {
    fontSize: 16,
    marginTop: 4,
    color: '#111',
  },
  apiKeyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  usageItem: {
    fontSize: 16,
    marginTop: 8,
  },
  totalBill: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1976d2',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    fontSize: 18,
    color: '#888',
  },
});
