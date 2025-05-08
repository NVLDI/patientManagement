// DoctorDashboard.styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    gap: 20,
  },
  leftPanel: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  rightPanel: {
    width: 500,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#e3eefd',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#3366ff',
    fontWeight: '600',
  },
  appointmentCard: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 12,
  },
  appointmentTime: {
    fontWeight: '700',
    fontSize: 16,
  },
  appointmentType: {
    color: '#888',
    marginTop: 4,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    gap: 12,
  },
  statusBadge: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontWeight: '600',
    fontSize: 12,
    overflow: 'hidden',
  },
  statusCompleted: {
    backgroundColor: '#e0eaff',
    color: '#3366ff',
  },
  statusWaiting: {
    backgroundColor: '#fff4c2',
    color: '#7a5800',
  },
  statusConfirmed: {
    backgroundColor: '#d2f7dc',
    color: '#1b5e20',
  },
  link: {
    color: '#3366ff',
    fontWeight: '600',
  },
  activityItem: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  activityIcon: {
    fontSize: 20,
  },
  activityText: {
    fontSize: 14,
  },
  bold: {
    fontWeight: '700',
  },
  activityTime: {
    color: '#999',
    fontSize: 12,
  },
});
