import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  contactPane: {
    width: 300,
    backgroundColor: '#1e1e1e',
    borderRightWidth: 1,
    borderColor: '#333',
  },
  chatPane: {
    flex: 1,
    backgroundColor: '#0b141a',
  },
});

export default styles;
