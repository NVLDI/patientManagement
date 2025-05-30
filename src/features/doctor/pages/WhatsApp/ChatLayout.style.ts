// WhatsApp/ChatLayout.style.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f2f5',
  },
  contactPane: {
    width: 320,
    backgroundColor: '#ffffff',
    borderRightWidth: 1,
    borderColor: '#ddd',
  },
  chatPane: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
});

export default styles;