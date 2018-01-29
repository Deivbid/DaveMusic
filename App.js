import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox';
import ArtistList from './artistList';

export default class App extends React.Component {

  render() {

    const artist = {
      image: 'http://los40es00.epimg.net/los40/imagenes/2017/09/02/musica/1504342280_439411_1504342381_noticia_normal.jpg',
      name: 'Avril Lavigne',
      likes: 200,
      comments: 140,
    }
    const artists = Array(500).fill(artist)

    return (
      <View style={styles.container}>
        <ArtistList artists={artists} />
      </View>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});
