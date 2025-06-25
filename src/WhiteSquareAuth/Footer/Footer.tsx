import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        © 2025 White Square Medical Innovation Private Limited. All Rights Reserved.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#343a40',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#dee2e6',
    alignItems: 'center',
    zIndex: 999
  },
  footerText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center'
  }
});
