import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  sidebar: {
    width: width > 768 ? 240 : '100%',
    backgroundColor: '#fff',
    borderRightWidth: width > 768 ? 1 : 0,
    borderBottomWidth: width <= 768 ? 1 : 0,
    borderColor: '#ddd',
    padding: 16,
    height: '100%',
    minHeight: '100%',
    flex: 1,
  },
  logo: {
    marginBottom: 12,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  activeButton: {
    backgroundColor: '#f0f4ff',
  },
  buttonText: {
    fontSize: 16,
    flexShrink: 1,
    color: '#111827',
  },
  activeText: {
    color: '#1d4ed8',
    fontWeight: 'bold',
  },
});

export default styles;
