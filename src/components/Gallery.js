import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ToMainScreen, Spinner} from './common';
import {connect} from 'react-redux';
import {
  fetchConstructionImages,
  fetchFundraisingImages,
  fetchSikhHeritageImages,
  fetchCanadaDayImages,
  fetchSangatImages,
  loadingImages,
} from '../actions';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';

class Gallery extends Component {
  renderSpinner() {
    if (this.props.loadingImages) {
      return <Spinner size="large" style={styles.spinnerStyle} />;
    } else {
      return (
        <ScrollView
          style={styles.containerStyle}
          showVerticalScrollIndicator={false}>
          <View>
            <ToMainScreen headerText="Gallery" style={styles.headerStyle} />
          </View>
          {/*///////////////////////////////////////////////////////////////////////*/}
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleTextStyle}>Construction</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.props.constructionImagesArray}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => Actions.imageView({uri: item.uri})}>
                <Image
                  source={{uri: item.uri}}
                  style={styles.galleryImageStyle}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.uri}
            style={styles.galleryStyle}
          />
          {/*///////////////////////////////////////////////////////////////////////*/}
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleTextStyle}>Fundraising</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.props.fundraisingImagesArray}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => Actions.imageView({uri: item.uri})}>
                <Image
                  source={{uri: item.uri}}
                  style={styles.galleryImageStyle}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.uri}
            style={styles.galleryStyle}
          />
          {/*///////////////////////////////////////////////////////////////////////*/}
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleTextStyle}>Sikh Heritage Moments</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.props.sikhHeritageImagesArray}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => Actions.imageView({uri: item.uri})}>
                <Image
                  source={{uri: item.uri}}
                  style={styles.galleryImageStyle}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.uri}
            style={styles.galleryStyle}
          />
          {/*///////////////////////////////////////////////////////////////////////*/}
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleTextStyle}>Canada Day</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.props.canadaDayImagesArray}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => Actions.imageView({uri: item.uri})}>
                <Image
                  source={{uri: item.uri}}
                  style={styles.galleryImageStyle}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.uri}
            style={styles.galleryStyle}
          />
          {/*///////////////////////////////////////////////////////////////////////*/}
          <View style={styles.titleViewStyle}>
            <Text style={styles.titleTextStyle}>Sangat Contributions</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.props.sangatImagesArray}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => Actions.imageView({uri: item.uri})}>
                <Image
                  source={{uri: item.uri}}
                  style={styles.galleryImageStyle}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.uri}
            style={styles.galleryStyle}
          />
          {/*///////////////////////////////////////////////////////////////////////*/}
        </ScrollView>
      );
    }
  }

  render() {
    return <View style={styles.spinnerViewStyle}>{this.renderSpinner()}</View>;
  }
}

const styles = {
  galleryImageStyle: {
    borderRadius: 8,
    height: 200,
    width: 200,
    marginLeft: 8,
    marginRight: 8,
  },
  headerStyle: {
    marginBottom: 32,
  },
  containerStyle: {
    flexDirection: 'column',
  },
  titleTextStyle: {
    marginLeft: 16,
    marginVertical: 8,
    fontSize: 16,
  },
  galleryStyle: {
    marginBottom: 48,
  },
  spinnerViewStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  spinnerStyle: {
    alignSelf: 'center',
  },
  titleViewStyle: {
    borderBottomWidth: 3,
    borderColor: '#07c8f9',
    marginBottom: 16,
    marginRight: 32,
  },
};

const mapStateToProps = state => {
  const constructionImagesArray = _.map(
    state.gallery.constructionImagesObject,
    (val, key) => {
      return {
        ...val,
        key: key,
      };
    },
  );

  const fundraisingImagesArray = _.map(
    state.gallery.fundraisingImagesObject,
    (val, key) => {
      return {
        ...val,
        key: key,
      };
    },
  );

  const sikhHeritageImagesArray = _.map(
    state.gallery.sikhHeritageImagesObject,
    (val, key) => {
      return {
        ...val,
        key: key,
      };
    },
  );

  const canadaDayImagesArray = _.map(
    state.gallery.canadaDayImagesObject,
    (val, key) => {
      return {
        ...val,
        key: key,
      };
    },
  );

  const sangatImagesArray = _.map(
    state.gallery.sangatImagesObject,
    (val, key) => {
      return {
        ...val,
        key: key,
      };
    },
  );

  return {
    constructionImagesArray,
    fundraisingImagesArray,
    sikhHeritageImagesArray,
    canadaDayImagesArray,
    sangatImagesArray,
    loadingImages: state.gallery.loadingImages,
  };
};

export default connect(
  mapStateToProps,
  {
    fetchConstructionImages,
    fetchFundraisingImages,
    fetchSikhHeritageImages,
    fetchCanadaDayImages,
    fetchSangatImages,
    loadingImages,
  },
)(Gallery);
