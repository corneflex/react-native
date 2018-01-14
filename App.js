/**
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlbumList from './src/components/AlbumList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <AlbumList />
    <Text>Open up App.js working on your app!</Text>
    <Text>Changes you make will automatically reload.</Text>
    <Text>Shake your phone to open the developer menu.</Text>
  </View>
);

export default App;
