import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

//the onPress callback from AlbumDetail is passed through so it can be used for the onPress function in the TouchableOpacity
//children are also recieved by the button component
const MainScreenCard = (props, {onPress, children}) => {
  return (
    <View>
      <Text style={styles.titleTextStyle}>{props.title}</Text>
      {/*TouchableOpacity is used to make something a button, and causes a brief fading of the button to show feedback*/}
      <TouchableOpacity
        //onPress handler is used to decide what happens when that button is pressed
        onPress={props.onPress}
        style={styles.buttonStyle}>
        <LinearGradient
          colors={['#ff930f', '#fff95b']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={styles.LinearGradient}>
          {/*The children component is display as text*/}
          <Icon
            name={props.icon}
            size={40}
            color="#900"
            style={styles.iconStyle}
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  buttonStyle: {
    height: 112,
    alignSelf: 'stretch',
    marginLeft: 32,
    marginRight: 32,
    marginTop: 16,
    marginBottom: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleTextStyle: {
    marginLeft: 32,
    marginTop: 32,
    paddingBottom: 4,
    color: '#000839',
    fontSize: 16,
  },
  iconStyle: {
    alignSelf: 'center',
    color: '#000839',
  },
  LinearGradient: {
    flex: 1,
    borderRadius: 24,
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

export {MainScreenCard};
