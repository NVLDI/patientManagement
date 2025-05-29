import { StyleSheet } from 'react-native';

const timeColumnWidth = 80;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa', // blend of bg-gray-100 and #f5f6fa
  },
  header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center', // ✅ ensures vertical alignment
  paddingHorizontal: 16,
  paddingVertical: 8,
  backgroundColor: '#ffffff',
},
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'center',
  },
  toggleButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleButtonActive: {
    backgroundColor: '#1e40af',
  },
  greenButton: {
    backgroundColor: '#16a34a',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  yellowButton: {
    backgroundColor: '#facc15',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  redButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
  appointmentCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  appointmentRow: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appointmentTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  appointmentType: {
    fontSize: 14,
    color: '#6b7280',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  statusCompleted: {
    backgroundColor: '#dbeafe',
  },
  statusWaiting: {
    backgroundColor: '#fef3c7',
  },
  statusConfirmed: {
    backgroundColor: '#d1fae5',
  },
  viewSwitcher: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  viewButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
    marginHorizontal: 4,
  },
  viewButtonSelected: {
    backgroundColor: '#3b82f6',
  },
  viewText: {
    color: '#374151',
    fontWeight: '500',
  },
  viewTextSelected: {
    color: '#fff',
    fontWeight: '700',
  },
  navText: {
    fontSize: 24,
    color: '#3a82f7',
  },
  weekdayRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#e0e0e0',
  },
  weekdayText: {
    width: '14.28%',
    textAlign: 'center',
    fontWeight: '600',
    color: '#444',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  appointmentCount: {
    fontSize: 10,
    marginTop: 2,
    color: '#666',
    textAlign: 'center',
  },
  timeColumn: {
    width: timeColumnWidth,
    backgroundColor: '#f3f4f6',
    alignItems: 'flex-end',
  },
  timeHeaderSpacer: {
    height: 40,
    borderBottomWidth: 0.5,
    borderColor: '#e5e7eb',
  },
  timeSlot: {
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: '#e5e7eb',
    justifyContent: 'center',
    paddingRight: 4,
  },
  timeLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  slotGrid: {
    flexDirection: 'column',
  },
  slotRow: {
    flexDirection: 'row',
  },
  dayHeaderText: {
    fontWeight: 'bold',
    color: '#1e293b',
    fontSize: 12,
  },
  weekGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default styles;
