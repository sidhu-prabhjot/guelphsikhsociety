import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

const RequestEventCard = ({
  title,
  eventHolder,
  eventType,
  email,
  phoneNumber,
  startMonth,
  startDate,
  startYear,
  endMonth,
  endDate,
  endYear,
  startTime,
  endTime,
  timeStamp,
}) => {
  return (
    <TouchableOpacity
      style={styles.containerStyle}
      onPress={() => Actions.requestInfo({email, phoneNumber, title})}>
      <LinearGradient
        colors={['#0d41e1', '#07c8f9']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={styles.LinearGradient}>
        <View style={styles.childContainer}>
          <Text style={styles.textStyle}>
            Time Stamp:{'\t'}
            {timeStamp}
          </Text>
          <Text style={styles.textStyle}>
            Event Holder:{'\t'}
            {eventHolder}
          </Text>
          <Text style={styles.textStyle}>
            Event Title:{'\t'}
            {title}
          </Text>
          <Text style={styles.textStyle}>
            Event Type:{'\t'}
            {eventType}
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
            Start Time:{'\t'} {startTime}
          </Text>
          <Text style={styles.textStyle}>
            End:{'\t'} {endTime}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.readMore}>
          <Text style={styles.readMore}>Click For More Information</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = {
  LinearGradient: {
    borderRadius: 24,
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 8,
    marginRight: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
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
    borderBottomColor: '#000000',
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

export {RequestEventCard};
