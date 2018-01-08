import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import PoemPreviewList from './src/components/PoemPreviewList';

const App = () => (
  <View>
    <Header headerText={'Poems'} />
    <PoemPreviewList />
  </View>
);

AppRegistry.registerComponent('MultiVerse2', () => App);
