import React from 'react';
//ActivityIndicator is imported from react-native which is the default loading spinner
import {View, ActivityIndicator} from 'react-native';

//since there is no changin of state involved, normal component is used
//the size of the spinner will be will be passed through when the component is referenced
const Spinner = ({size}) => {
  return (
    <View style={styles.spinnerStyle}>
      {/*What this ActivityIndicator line is saying, is that if there is a size prop passed
        down to this component, then set it to that size, if not, then default the size
        to large*/}
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    //flex of 1 makes sure the view takes up all the space it can
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export {Spinner};
