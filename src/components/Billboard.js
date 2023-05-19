import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {fetchBillboard} from '../actions';
import {connect} from 'react-redux';

class Billboard extends Component {
  render() {
    console.log(this.props.uri.billboardImage);
    return (
      <View style={styles.containerStyle}>
        <View style={styles.imageViewStyle}>
          <Image
            source={{
              uri: this.props.uri.billboardImage,
            }}
            resizeMode="contain"
            style={styles.billboardStyle}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  billboardStyle: {
    height: undefined,
    width: undefined,
    alignSelf: 'stretch',
    flex: 1,
    borderRadius: 8,
  },
  imageViewStyle: {
    marginLeft: 32,
    marginRight: 32,
    marginTop: 48,
    marginBottom: 8,
    flex: 1,
    height: 224,
    alignSelf: 'stretch',
  },
  billboardTextStyle: {
    marginLeft: 32,
    marginTop: 32,
    fontSize: 16,
  },
};

const mapStateToProps = state => {
  return {
    uri: state.comm.billboard,
  };
};

export default connect(
  mapStateToProps,
  {fetchBillboard},
)(Billboard);
