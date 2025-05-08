import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './NotFound.styles'; // 👈 import styles

const NotFound = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>404</Text>
      <Text style={styles.message}>Page Not Found</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Landing')}
        style={styles.button}
        labelStyle={styles.label}
      >
        Go to Home
      </Button>
    </View>
  );
};

export default NotFound;
