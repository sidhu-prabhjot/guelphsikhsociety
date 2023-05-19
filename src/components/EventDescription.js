import React from 'react';
import {Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import {ToMainScreen} from './common';

const EventDescription = ({eventDescription, backgroundColor}) => {
  return (
    <ScrollView style={styles.viewStyle}>
      <ToMainScreen headerText="Event Description" />
      <LinearGradient
        colors={backgroundColor}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={styles.LinearGradient}>
        <Text style={styles.textStyle}>
          Description: {'\n\n'}
          {eventDescription}
        </Text>
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
    marginTop: 32,
  },
  textStyle: {
    padding: 16,
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
  },
  headerTextStyle: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 32,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
    backgroundColor: '#ffa41b',
    height: 60,
    position: 'relative',
    marginBottom: 32,
  },
  iconStyle: {
    paddingLeft: 16,
    paddingBottom: 16,
  },
};

export default EventDescription;
