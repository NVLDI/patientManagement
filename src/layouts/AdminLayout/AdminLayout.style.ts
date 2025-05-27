import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  sidebar: {
    width: screenWidth > 768 ? 250 : '100%',
    backgroundColor: '#fff',
    borderRightWidth: screenWidth > 768 ? 1 : 0,
    borderBottomWidth: screenWidth <= 768 ? 1 : 0,
    borderColor: '#e5e7eb',
    padding: 16,
    height: '100%',
    flex: 1,
  },
  logo: {
    marginBottom: 16,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  navItem: {
   flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
  navText: {
    fontSize: 14,
    color: '#374151',
  },
  activeItem: {
     backgroundColor: '#f0f0f0',
  },
  activeText: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default styles;
