//Import libraries for making a component
import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

//make a component
const Header = props => {
  const {textStyle} = styles;

  return (
    <View>
      <LinearGradient
        colors={['#ff930f', '#fff95b']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={[styles.viewStyle, props.style]}>
        <Icon name="khanda" size={32} color="#000839" />
        <Text style={textStyle}>{props.headerText}</Text>
        <Icon name="khanda" size={32} color="#000839" />
      </LinearGradient>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
    color: '#000839',
    paddingLeft: 8,
    paddingRight: 8,
  },
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#ffa41b',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative',
  },
};

//make the component available to other parts of the app
export {Header};
