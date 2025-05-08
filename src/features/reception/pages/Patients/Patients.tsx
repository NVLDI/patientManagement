import React from 'react';
import { View, Text } from 'react-native';
import useStyles from './Patients.style';

const Patients = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text>Patients Screen</Text>
    </View>
  );
};

export default Patients;
