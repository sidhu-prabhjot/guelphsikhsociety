import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/Feather';

const EventCard = ({
  title,
  eventHolder,
  eventType,
  startMonth,
  startDate,
  startYear,
  endMonth,
  endDate,
  endYear,
  startHour,
  startMinute,
  startMeridiem,
  endHour,
  endMinute,
  endMeridiem,
  eventDescription,
  backgroundColor,
  deleteButton,
  eventKey,
}) => {
  return (
    <TouchableOpacity
      style={styles.containerStyle}
      onPress={() =>
        Actions.eventDescription({eventDescription, backgroundColor})
      }>
      <LinearGradient
        colors={backgroundColor}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={styles.LinearGradient}>
        <View style={styles.childContainer}>
          <Text style={styles.textStyle}>
            Event:{'\t'}
            {title}
          </Text>
          <Text style={styles.textStyle}>
            Type:{'\t'}
            {eventType}
          </Text>
          <Text style={styles.textStyle}>
            Event Holder:{'\t'}
            {eventHolder}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.childContainer}>
          <Text style={styles.textStyle}>
            Start:{'\t'} {startMonth}
            {'/'}
            {startDate}
            {'/'}
            {startYear}
          </Text>
          <Text style={styles.textStyle}>
            End:{'\t'} {endMonth}
            {'/'}
            {endDate}
            {'/'}
            {endYear}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.childContainer}>
          <Text style={styles.textStyle}>
            Start Time:{'\t'} {startHour}
            {':'}
            {startMinute}
            {'/'}
            {startMeridiem}
          </Text>
          <Text style={styles.textStyle}>
            End:{'\t'} {endHour}
            {':'}
            {endMinute}
            {'/'}
            {endMeridiem}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.readMore}>
          <Text style={styles.readMore}>Click For More Information</Text>
        </View>
        <View style={styles.horizontalLine} />
        {deleteButton}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = {
  LinearGradient: {
    borderRadius: 24,
    marginTop: 8,
    marginBottom: 16,
    marginLeft: 8,
    marginRight: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  childContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingRight: 16,
    paddingLeft: 16,
  },
  textStyle: {
    flex: 1,
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 16,
    color: '#FFFFFF',
  },
  horizontalLine: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    marginLeft: 8,
    marginRight: 8,
  },
  readMore: {
    alignSelf: 'center',
    fontSize: 16,
    padding: 8,
    color: '#FFFFFF',
  },
};

export {EventCard};
