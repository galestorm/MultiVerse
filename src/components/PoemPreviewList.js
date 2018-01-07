import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import PoemPreview from './PoemPreview';

class PoemPreviewList extends Component {
  state = { poems: [], lat: null, lng: null };

  componentWillMount() {
    const getPoems = () => {
      axios.get(`http://localhost:3000/weather?lat=${this.state.lat}&lon=${this.state.lng}`)
        .then((weatherResponse) => {
          const weatherDescription = weatherResponse.data.weather[0].main;
          axios.get(`http://localhost:3000/poems?query=${weatherDescription}`)
            .then((poemsResponse) => {
              this.setState({ poems: poemsResponse.data });
            });
        });
    };

    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      getPoems();
    });
  }

  renderPoems() {
    return this.state.poems.map(poem =>
      <PoemPreview key={poem.id} poem={poem} />);
  }

  render() {
    return (
      <View>
        {this.renderPoems()}
      </View>
    );
  }
}

export default PoemPreviewList;
