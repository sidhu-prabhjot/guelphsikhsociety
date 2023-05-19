import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Linking} from 'react-native';
import {ToMainScreen} from './common';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();

class NitnemGutkas extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <ToMainScreen headerText="Nitnem" style={styles.headerStyle} />
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
                onPress={() =>
                  Linking.openURL(
                    'https://www.sikhzone.net/images/download/japjisahib.pdf',
                  )
                }>
                <Icon
                  name="sunrise"
                  size={40}
                  color="#FFFFFF"
                  style={styles.iconStyle}
                />
                <Text style={styles.childrenTextStyle}>Japji Sahib</Text>
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
              colors={['#ff930f', '#fff95b']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.LinearGradient}>
              <TouchableOpacity
                style={styles.cardStyle}
                onPress={() =>
                  Linking.openURL(
                    'https://www.sikhzone.net/images/download/japjisahib.pdf',
                  )
                }>
                <Icon
                  name="sunrise"
                  size={40}
                  color="#FFFFFF"
                  style={styles.iconStyle}
                />
                <Text style={styles.childrenTextStyle}>Jaap Sahib</Text>
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
              colors={['#ff930f', '#fff95b']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.LinearGradient}>
              <TouchableOpacity
                style={styles.cardStyle}
                onPress={() =>
                  Linking.openURL(
                    'https://www.sikhzone.net/images/download/tavprasadsvye.pdf',
                  )
                }>
                <Icon
                  name="sunrise"
                  size={40}
                  color="#FFFFFF"
                  style={styles.iconStyle}
                />
                <Text style={styles.childrenTextStyle}>Tav Prasad Svayye</Text>
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
              colors={['#ff930f', '#fff95b']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.LinearGradient}>
              <TouchableOpacity
                style={styles.cardStyle}
                onPress={() =>
                  Linking.openURL(
                    'https://www.sikhzone.net/images/download/Chaupai-Sahib.pdf',
                  )
                }>
                <Icon
                  name="sunrise"
                  size={40}
                  color="#FFFFFF"
                  style={styles.iconStyle}
                />
                <Text style={styles.childrenTextStyle}>Chaupai Sahib</Text>
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
              colors={['#ff930f', '#fff95b']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.LinearGradient}>
              <TouchableOpacity
                style={styles.cardStyle}
                onPress={() =>
                  Linking.openURL(
                    'https://www.sikhzone.net/images/download/anandsahib.pdf',
                  )
                }>
                <Icon
                  name="sunrise"
                  size={40}
                  color="#FFFFFF"
                  style={styles.iconStyle}
                />
                <Text style={styles.childrenTextStyle}>Anand Sahib</Text>
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

export default NitnemGutkas;
