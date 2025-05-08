import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 8,
    marginBottom: 16,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  timelineWrapper: {
    position: 'relative',
    paddingLeft: 40,
    paddingTop: 10,
  },
  verticalLine: {
    position: 'absolute',
    top: 10,
    bottom: 0,
    left: 20,
    width: 2,
    backgroundColor: '#3b82f6', // blue line
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 4,
    top: 0,
  },
  iconText: {
    color: '#fff',
    fontSize: 18,
  },
  timelineContent: {
    marginLeft: 24,
  },
  dateText: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 2,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  descriptionText: {
    fontSize: 14,
    color: '#374151',
  },
});

export default styles;
