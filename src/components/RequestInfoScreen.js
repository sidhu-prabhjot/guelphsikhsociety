import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import Communications from 'react-native-communications';
import {ToMainScreen} from './common';

const RequestInfoScreen = ({email, phoneNumber, title}) => {
  return (
    <ScrollView style={styles.viewStyle}>
      <ToMainScreen
        headerText="Request Information Screen"
        style={styles.headerStyle}
      />
      <LinearGradient
        colors={['#0d41e1', '#07c8f9']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={styles.LinearGradient}>
        <TouchableOpacity
          onPress={() =>
            Communications.email(
              [`${email}`],
              null,
              null,
              `${title} response`,
              null,
            )
          }>
          <Text style={styles.textStyle}>
            Email: {'\t'}
            {email} {'(click to respond)'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Communications.phonecall(`${phoneNumber}`, true)}>
          <Text style={styles.textStyle}>
            Phone Number: {'\t'}
            {phoneNumber} {'(click to call)'}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = {
  viewStyle: {
    flex: 1,
  },
  LinearGradient: {
    borderRadius: 8,
    marginRight: 8,
    marginLeft: 8,
  },
  textStyle: {
    padding: 16,
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
  },
  headerStyle: {
    marginBottom: 32,
  },
  iconStyle: {
    paddingLeft: 16,
    paddingBottom: 8,
  },
};

export default RequestInfoScreen;
