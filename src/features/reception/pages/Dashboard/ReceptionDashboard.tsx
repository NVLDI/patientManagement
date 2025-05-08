import React from 'react';
import { View, Text } from 'react-native';
import useStyles from './ReceptionDashboard.style';

const ReceptionDashboard = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text>ReceptionDashboard Screen</Text>
    </View>
  );
};

export default ReceptionDashboard;
