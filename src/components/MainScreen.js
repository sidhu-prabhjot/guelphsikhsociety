import React, {Component} from 'react';
import {ScrollView, Linking, View, Text, TouchableOpacity} from 'react-native';
import {MainScreenCard, Header} from './common';
import Billboard from './Billboard';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import {logOut, checkAdmin, checkAdminFalse, rememberMeFalse} from '../actions';
import {connect} from 'react-redux';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import Communications from 'react-native-communications';

class MainScreen extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user.uid === 'Emycz2T9ekdVBAOpno3y2FJyQVJ3') {
        this.props.checkAdmin();
      } else {
        // User not logged in or has just logged out.
        this.props.checkAdminFalse();
        console.log('not admin');
      }
    });
  }

  //check if the user is an admin, and decide what screen to show the user according to that information
  checkNextSuggestionScreen() {
    if (this.props.admin) {
      return Actions.community();
    } else {
      return Actions.createSuggestion();
    }
  }

  //check if the user is an admin, and decide what screen to show the user according to that information
  checkNextBookingScreen() {
    if (this.props.admin) {
      return Actions.bookingList();
    } else {
      return Actions.requestBooking();
    }
  }

  onLogOut = async () => {
    try {
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('password');
      this.props.rememberMeFalse();
      await AsyncStorage.setItem('rememberMeAsync', 'OFF');
      Actions.auth();
      return console.log('removed');
    } catch (e) {
      return console.log(e);
    }
  };

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.ScrollViewStyle}>
        <LinearGradient
          colors={['#FFFFFF', '#FFFFFF']}
          style={styles.LinearGradient}>
          <Header headerText="Guelph Sikh Society" style={styles.headerStyle} />

          <Billboard />

          <MainScreenCard
            title="Upcoming Events"
            onPress={() => Actions.events()}
            icon="calendar">
            Number 1
          </MainScreenCard>

          <MainScreenCard
            title="Community Suggestions"
            onPress={() => this.checkNextSuggestionScreen()}
            icon="message-square">
            Number 1
          </MainScreenCard>

          <MainScreenCard
            title="Request Event Booking"
            onPress={() => this.checkNextBookingScreen()}
            icon="book">
            Number 1
          </MainScreenCard>

          <MainScreenCard
            title="Gallery"
            onPress={() => Actions.gallery()}
            icon="image">
            Gallery
          </MainScreenCard>

          <MainScreenCard
            title="Gutkas"
            onPress={() => Actions.gutkaScreen()}
            icon="book-open">
            Number 1
          </MainScreenCard>

          <MainScreenCard
            title="Donate"
            onPress={() =>
              Linking.openURL('http://guelphsikhsociety.ca/donate/')
            }
            icon="credit-card">
            Number 1
          </MainScreenCard>

          <View style={styles.containerStyle}>
            <Text style={styles.titleTextStyle}>Contact Info</Text>
            <View style={styles.viewStyle}>
              <LinearGradient
                colors={['#ff930f', '#fff95b']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={styles.LinearGradient}>
                <View style={styles.childrenViewStyle}>
                  <Icon
                    name="map-pin"
                    size={24}
                    color="#FFFFFF"
                    style={styles.iconStyle}
                  />
                  <Text style={styles.textStyle}>410 Clair Road East</Text>
                </View>
                <View style={styles.childrenViewStyle}>
                  <Icon
                    name="mail"
                    size={24}
                    color="#FFFFFF"
                    style={styles.iconStyle}
                  />
                  <Text style={styles.textStyle}>
                    info@guelphsikhsociety.ca
                  </Text>
                </View>
                <View style={styles.childrenViewStyle}>
                  <Icon
                    name="phone"
                    size={24}
                    color="#FFFFFF"
                    style={styles.iconStyle}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      Communications.phonecall('5198221112', true)
                    }>
                    <Text style={styles.linkStyle}>(519) - 822 - 1112</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL('http://guelphsikhsociety.ca/')
                  }>
                  <View style={styles.childrenViewStyle}>
                    <Icon
                      name="link-2"
                      size={24}
                      color="#FFFFFF"
                      style={styles.iconStyle}
                    />
                    <Text style={styles.linkStyle}>
                      Guelph Sikh Society Website
                    </Text>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>

          <View style={styles.containerStyle}>
            <Text style={styles.titleTextStyle}>App Info</Text>
            <View style={styles.viewStyle}>
              <LinearGradient
                colors={['#ff930f', '#fff95b']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={styles.LinearGradient}>
                <View style={styles.childrenViewStyle}>
                  <Icon
                    name="cpu"
                    size={24}
                    color="#FFFFFF"
                    style={styles.iconStyle}
                  />
                  <Text style={styles.textStyle}>Version 1.0</Text>
                </View>
                <View style={styles.childrenViewStyle}>
                  <Icon
                    name="code"
                    size={24}
                    color="#FFFFFF"
                    style={styles.iconStyle}
                  />
                  <Text style={styles.textStyle}>No New Updates</Text>
                </View>
              </LinearGradient>
            </View>
          </View>

          <MainScreenCard
            title="Log Out"
            onPress={() => this.onLogOut()}
            icon="log-out">
            Log Out
          </MainScreenCard>
        </LinearGradient>
      </ScrollView>
    );
  }
}

const styles = {
  ScrollViewStyle: {
    backgroundColor: '#FFFFFF',
  },
  headerStyle: {
    backgroundColor: '#ffa41b',
    position: 'relative',
  },
  LinearGradient: {
    flex: 1,
    borderRadius: 24,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  viewStyle: {
    flexDirection: 'column',
    marginTop: 16,
  },
  containerStyle: {
    marginLeft: 32,
    marginRight: 32,
  },
  titleTextStyle: {
    fontSize: 16,
    marginTop: 32,
  },
  childrenViewStyle: {
    flexDirection: 'row',
  },
  iconStyle: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 8,
  },
  textStyle: {
    marginTop: 16,
    marginBottom: 16,
    marginRight: 16,
    marginLeft: 8,
    fontSize: 18,
  },
  linkStyle: {
    marginTop: 16,
    marginBottom: 16,
    marginRight: 16,
    marginLeft: 8,
    fontSize: 18,
    color: '#0000EE',
  },
};

const mapStateToProps = state => {
  return {
    loggedOut: state.auth.logOutSuccess,
    admin: state.auth.admin,
  };
};

export default connect(
  mapStateToProps,
  {logOut, checkAdmin, checkAdminFalse, rememberMeFalse},
)(MainScreen);
