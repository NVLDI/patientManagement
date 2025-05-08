import React from 'react';
import { View, Text } from 'react-native';
import useStyles from './WaitingRoom.style';

const WaitingRoom = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text>WaitingRoom Screen</Text>
    </View>
  );
};

export default WaitingRoom;
