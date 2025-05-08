import React from 'react';
import { View, Text } from 'react-native';
import useStyles from './Appointments.style';

const Appointments = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text>Appointments Screen</Text>
    </View>
  );
};

export default Appointments;
