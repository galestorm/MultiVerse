import React from 'react';
import { Text, View, Image } from 'react-native';

const PoemPreview = ({ poem }) => {
  const { title } = poem;

  return (
    <Text>{title}</Text>
  );
};

export default PoemPreview;
