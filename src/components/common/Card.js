//this is a component to show a single card, and style it
import React from 'react';
import {View} from 'react-native';

//the album information is received to the card file so it can create instructions for rendering the data
const Card = props => {
  return (
    <View style={styles.containerStyle}>
      {/*by adding {props.children}, whatever was within the card tags in AlbumDetails, is brought over to the card component*/}
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

export {Card};
