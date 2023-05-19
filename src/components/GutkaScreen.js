import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Linking} from 'react-native';
import {ToMainScreen} from './common';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';
Icon.loadFont();

class GutkaScreen extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <ToMainScreen headerText="Gutkas" style={styles.headerStyle} />
        <LinearGradient
          colors={['#FFFFFF', '#FFFFFF']}
          style={styles.viewGradient}>
          <View style={styles.childrenViewStyle}>
            <LinearGradient
              colors={['#ff930f', '#fff95b']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.LinearGradient}>
              <TouchableOpacity
                style={styles.cardStyle}
                onPress={() => Actions.nitnemGutkas()}>
                <Icon
                  name="sunrise"
                  size={40}
                  color="#FFFFFF"
                  style={styles.iconStyle}
                />
                <Text style={styles.childrenTextStyle}>Nitnem</Text>
                <Icon
                  name="moon"
                  size={32}
                  color="transparent"
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={styles.childrenViewStyle}>
            <LinearGradient
              colors={['#fc575e', '#3d8bff']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.LinearGradient}>
              <TouchableOpacity
                style={styles.cardStyle}
                onPress={() =>
                  Linking.openURL(
                    'https://www.sikhzone.net/images/download/rehras.pdf',
                  )
                }>
                <Icon
                  name="sunset"
                  size={40}
                  color="#FFFFFF"
                  style={styles.iconStyle}
                />
                <Text style={styles.childrenTextStyle}>Rehras Sahib</Text>
                <Icon
                  name="moon"
                  size={40}
                  color="transparent"
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={styles.childrenViewStyle}>
            <LinearGradient
              colors={['#ffa8bd', '#242acf']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.LinearGradient}>
              <TouchableOpacity
                style={styles.cardStyle}
                onPress={() =>
                  Linking.openURL(
                    'https://www.sikhzone.net/images/download/kirtansohila.pdf',
                  )
                }>
                <Icon
                  name="moon"
                  size={40}
                  color="#FFFFFF"
                  style={styles.iconStyle}
                />
                <Text style={styles.childrenTextStyle}>Kirtan Sohila</Text>
                <Icon
                  name="moon"
                  size={32}
                  color="transparent"
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={styles.childrenViewStyle}>
            <LinearGradient
              colors={['#ff9068', '#ff4b1f']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.LinearGradient}>
              <TouchableOpacity
                style={styles.cardStyle}
                onPress={() =>
                  Linking.openURL(
                    'https://www.sikhzone.net/images/download/asadivar.pdf',
                  )
                }>
                <Icons
                  name="music-note"
                  size={40}
                  color="#FFFFFF"
                  style={styles.iconStyle}
                />
                <Text style={styles.childrenTextStyle}>Asa Di Var</Text>
                <Icon
                  name="moon"
                  size={32}
                  color="transparent"
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={styles.childrenViewStyle}>
            <LinearGradient
              colors={['#38ef7d', '#11998e']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.LinearGradient}>
              <TouchableOpacity
                style={styles.cardStyle}
                onPress={() =>
                  Linking.openURL(
                    'https://www.sikhzone.net/images/download/sukhmanisahib.pdf',
                  )
                }>
                <Icons
                  name="leaf"
                  size={40}
                  color="#FFFFFF"
                  style={styles.iconStyle}
                />
                <Text style={styles.childrenTextStyle}>Sukhmani Sahib</Text>
                <Icon
                  name="moon"
                  size={32}
                  color="transparent"
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
            </LinearGradient>
          </View>

        </LinearGradient>
      </View>
    );
  }
}

const styles = {
  childrenViewStyle: {
    height: 112,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'transparent',
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 32,
    marginTop: 32,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
  },
  childrenTextStyle: {
    alignSelf: 'center',
    color: '#FFFFFF',
    //fontweight must be a number but in string form
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
  },
  viewStyle: {
    flex: 1,
  },
  cardStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  LinearGradient: {
    flex: 1,
    borderRadius: 24,
  },
  viewGradient: {
    flex: 1,
    justifyContent: 'space-around',
  },
  iconStyle: {
    alignSelf: 'center',
    paddingLeft: 32,
    paddingRight: 8,
  },
};

export default GutkaScreen;
