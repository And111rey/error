import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const  MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MAin creen MAin creen MAin creen MAin creen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
