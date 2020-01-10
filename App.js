import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppNtigation } from "./src/navigation/AppNavigation"

export default function App() {
  return (<AppNtigation/>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
