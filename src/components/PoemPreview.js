import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const PoemPreview = ({ poem }) => {

  const { title, author, lines } = poem;

  const { previewHeaderStyle, previewTitleStyle } = styles;

  const previewLines = lines.slice(0, 175) + '...';

  return (
    <Card>
      <CardSection>
        <View style={previewHeaderStyle}>
          <Text style={previewTitleStyle}>{title}</Text>
          <Text>{author}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Text>{previewLines}</Text>
      </CardSection>
    </Card>
  );
};

const styles = {
  previewHeaderStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  previewTitleStyle: {
    fontSize: 18,
  },
};

export default PoemPreview;
