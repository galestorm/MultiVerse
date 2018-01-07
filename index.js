import React from 'react';
import { AppRegistry, View } from 'react-native';
import PoemPreviewList from './src/components/PoemPreviewList';

const App = () => (
  <View>
    <PoemPreviewList />
  </View>
);

AppRegistry.registerComponent('MultiVerse2', () => App);
