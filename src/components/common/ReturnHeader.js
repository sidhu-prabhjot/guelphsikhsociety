//Import libraries for making a component
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

//make a component
const ReturnHeader = props => {
  const {textStyle, viewStyle} = styles;

  return (
    <View>
      <LinearGradient
        colors={['#ff930f', '#fff95b']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={[styles.viewStyle, props.style]}>
        <TouchableOpacity
          onPress={() => Actions.login()}
          style={styles.iconStyle}>
          <Icon name="arrow-left-circle" size={32} color="#000839" />
        </TouchableOpacity>
        <Text style={textStyle}>{props.headerText}</Text>
        <TouchableOpacity
          onPress={() => Actions.pop()}
          style={styles.iconStyle}>
          <Icon name="arrow-left-circle" size={32} color="transparent" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
    color: '#000839',
  },
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#ffa41b',
    justifyContent: 'space-between',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative',
  },
  iconStyle: {
    paddingLeft: 16,
  },
};

//make the component available to other parts of the app
export {ReturnHeader};
