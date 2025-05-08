import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,
    padding: 16,
  },
  backLink: {
    color: '#2563eb',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  details: {
    fontSize: 14,
    color: '#374151',
  },
  lastVisit: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  tabs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderColor: '#d1d5db',
    marginBottom: 12,
  },
  tabItem: {
    marginRight: 16,
    paddingBottom: 6,
  },
  tabActive: {
    fontWeight: '600',
    fontSize: 14,
    color: '#2563eb',
    borderBottomWidth: 2,
    borderColor: '#2563eb',
  },
  tabInactive: {
    fontWeight: '500',
    fontSize: 14,
    color: '#6b7280',
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 8,
  },
  historyList: {
    gap: 4,
  },
  historyItem: {
    color: '#374151',
    fontSize: 14,
  },
});

export default styles;
