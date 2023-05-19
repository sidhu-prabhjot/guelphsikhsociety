import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Actions} from 'react-native-router-flux';

const ImageView = ({uri}) => {
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity onPress={() => Actions.pop()} style={styles.iconStyle}>
        <Icon name="arrow-left-circle" size={32} color="#FFFFFF" />
      </TouchableOpacity>
      <Image
        source={{uri: uri}}
        style={styles.galleryImageStyle}
        resizeMode={'contain'}
      />
    </View>
  );
};

const styles = {
  galleryImageStyle: {
    flex: 1,
  },
  containerStyle: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerStyle: {
    backgroundColor: 'transparent',
  },
  iconStyle: {
    padding: 16,
  },
};

export default ImageView;
