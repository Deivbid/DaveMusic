import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ArtistBox extends React.Component {

  render() {
    const {image, name, likes, comments} = this.props.artist;

    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.info}>
            <Text style={styles.name}> {name} </Text>
          
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Icon name="ios-heart-outline" size={30}  color="gray"/> 
                <Text style={styles.count}> {likes} </Text>
              </View>
              <View style={styles.iconContainer}>
                <Icon name="ios-chatboxes-outline" size={30} color="gray" /> 
                <Text style={styles.count}> {comments} </Text>
              </View>
            </View>

          </View>
        </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  image: {

    width: 150,
    height: 150,
  },

  artistBox: {

    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    
    shadowOpacity: .2,
    shadowOffset: {
      width: -2,
      height: 1
    },
    elevation: 2,
  },

  info: {

    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    fontSize: 20,
    marginTop: 10,
    color: '#333',
  },

  row: {
    flexDirection: 'row',
    marginHorizontal: 40, 
    marginTop: 15,
  },

  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },

  count: {

    color: "gray",
  }

});
