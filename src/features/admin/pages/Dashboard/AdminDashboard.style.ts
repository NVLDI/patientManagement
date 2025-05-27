import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1f3f5',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
  },
  statLabel: {
    marginTop: 6,
    fontSize: 14,
    color: '#555',
  },
  analyticsContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
  },
  analyticsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  analyticsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  exportButton: {
    backgroundColor: '#2979FF',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
  },
  exportText: {
    color: '#fff',
    fontWeight: '600',
  },
  graphRow: {
    flexDirection: 'row',
    gap: 12,
  },
  graphBox: {
    flex: 1,
    backgroundColor: '#e8f1ff',
    borderRadius: 6,
    padding: 14,
    justifyContent: 'center',
  },
  graphTitle: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
  graphPlaceholder: {
    color: '#555',
    fontSize: 13,
  },
});

export default styles;
