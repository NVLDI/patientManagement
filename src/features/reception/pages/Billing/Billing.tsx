import React from 'react';
import { View, Text } from 'react-native';
import useStyles from './Billing.style';

const Billing = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text>Billing Screen</Text>
    </View>
  );
};

export default Billing;
