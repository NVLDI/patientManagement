import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  drawerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height,
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
    paddingTop: 20,
    paddingHorizontal: 10,
    zIndex: 1000,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 5,
  },
  toggleButton: {
    padding: 10,
    alignItems: 'flex-end',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 10,
  },
  toggleButtonText: {
    color: 'black',
    fontSize: 16,
  },
  logoIcon: {
    fontSize: 30,
  },
  navItemsContainer: {
    flex: 1,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
  activeNavItem: {
    backgroundColor: '#f0f0f0',
  },
  navIcon: {
    fontSize: 22,
    marginRight: 15,
  },
  navLabel: {
    fontSize: 16,
    color: '#333',
  },
  activeNavLabel: {
    fontWeight: 'bold',
    color: '#000',
  },
});
