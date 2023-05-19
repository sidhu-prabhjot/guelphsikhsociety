import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import {ToMainScreen} from './common';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

class ContactInfo extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <LinearGradient
          colors={['#005082', '#000839']}
          style={styles.LinearGradient}>
          <ToMainScreen headerText="Contact Information" />
          <View style={styles.smallContainerStyle}>
            <LinearGradient
              colors={['#0d41e1', '#07c8f9']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.childLinearGradient}>
              <View style={styles.childrenViewStyle}>
                <Icon
                  name="map-pin"
                  size={24}
                  color="#FFFFFF"
                  style={styles.iconStyle}
                />
                <Text style={styles.textStyle}>
                  Location: 410 Clair Road East
                </Text>
              </View>
            </LinearGradient>

            <LinearGradient
              colors={['#0d41e1', '#07c8f9']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.childLinearGradient}>
              <View style={styles.childrenViewStyle}>
                <Icon
                  name="mail"
                  size={24}
                  color="#FFFFFF"
                  style={styles.iconStyle}
                />
                <Text style={styles.textStyle}>
                  Email: info@guelphsikhsociety.ca
                </Text>
              </View>
            </LinearGradient>

            <LinearGradient
              colors={['#0d41e1', '#07c8f9']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.childLinearGradient}>
              <View style={styles.childrenViewStyle}>
                <Icon
                  name="phone"
                  size={24}
                  color="#FFFFFF"
                  style={styles.iconStyle}
                />
                <Text style={styles.textStyle}>
                  Phone Number: (519) - 822 - 1112
                </Text>
              </View>
            </LinearGradient>

            <LinearGradient
              colors={['#0d41e1', '#07c8f9']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.childLinearGradient}>
              <TouchableOpacity
                onPress={() => Linking.openURL('http://guelphsikhsociety.ca/')}>
                <View style={styles.childrenViewStyle}>
                  <Icon
                    name="link-2"
                    size={24}
                    color="#FFFFFF"
                    style={styles.iconStyle}
                  />
                  <Text style={styles.textStyle}>
                    Website: Guelph Sikh Society Website
                  </Text>
                </View>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
  },
  smallContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 8,
    marginRight: 8,
  },
  LinearGradient: {
    flex: 1,
  },
  childLinearGradient: {
    borderRadius: 16,
  },
  childrenViewStyle: {
    flexDirection: 'row',
    marginLeft: 24,
    marginRight: 24,
    padding: 8,
  },
  textStyle: {
    color: '#FFFFFF',
    padding: 8,
    fontSize: 16,
  },
  iconStyle: {
    paddingLeft: 8,
    paddingRight: 8,
    alignSelf: 'center',
  },
};

export default ContactInfo;
