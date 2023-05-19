import React from 'react';
import {View} from 'react-native';
//exactly the same as the card component in terms of data transfer
const CardSection = props => {
  return (
    //the styles is being put in square braces so the style can be overriden if wanted
    //if a props.style is passed, it will override containerStyle
    <View style={[styles.containerStyle, props.style]}>{props.children}</View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'transparent',
    marginBottom: 20,
  },
};

export {CardSection};
