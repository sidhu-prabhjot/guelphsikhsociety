import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//the onPress callback from AlbumDetail is passed through so it can be used for the onPress function in the TouchableOpacity
//children are also recieved by the button component
const Button = ({onPress, children}) => {
  return (
    <LinearGradient
      colors={['#ff930f', '#fff95b']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      style={styles.buttonStyle}>
      <TouchableOpacity
        //onPress handler is used to decide what happens when that button is pressed
        onPress={onPress}>
        <Text style={styles.textStyle}>{children}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    marginRight: 32,
    marginLeft: 32,
    borderRadius: 48,
    backgroundColor: '#ffa41b',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#000839',
    fontSize: 18,
    //fontweight must be a number but in string form
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 40,
  },
};

export {Button};
