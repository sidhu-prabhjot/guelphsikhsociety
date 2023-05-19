import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Communications from 'react-native-communications';

const SuggestionCard = ({
  title,
  suggestion,
  fullName,
  suggestionEmail,
  timeStamp,
}) => {
  return (
    <TouchableOpacity
      style={styles.containerStyle}
      onPress={() =>
        Communications.email(
          [`${suggestionEmail}`],
          null,
          null,
          `${title} response`,
          '',
        )
      }>
      <LinearGradient
        colors={['#0d41e1', '#07c8f9']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={styles.LinearGradient}>
        <View style={styles.authStyle}>
          <Text style={styles.authTextStyle}>Time Stamp: {timeStamp}</Text>
        </View>
        <View style={styles.authStyle}>
          <Text style={styles.authTextStyle}>Name: {fullName}</Text>
        </View>
        <View style={styles.authStyle}>
          <Text style={styles.authTextStyle}>Email: {suggestionEmail}</Text>
        </View>
        <View style={styles.titleStyle}>
          <Text style={styles.titleTextStyle}>Subject: {title}</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>Suggestion: {suggestion}</Text>
        </View>
        <View style={styles.clickForEmailStyle}>
          <Text style={styles.authTextStyle}>Click To Send Email</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderColor: 'transparent',
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 8,
    marginRight: 8,
  },
  LinearGradient: {
    flex: 1,
    borderRadius: 16,
  },
  titleStyle: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    marginLeft: 8,
    marginRight: 8,
  },
  textStyle: {
    fontSize: 16,
    padding: 16,
    paddingLeft: 24,
    color: '#FFFFFF',
  },
  titleTextStyle: {
    padding: 16,
    paddingLeft: 16,
    color: '#FFFFFF',
    fontSize: 16,
  },
  authStyle: {
    borderColor: 'transparent',
    marginLeft: 8,
    marginRight: 8,
  },
  authTextStyle: {
    padding: 16,
    paddingLeft: 16,
    color: '#FFFFFF',
    fontSize: 16,
  },
  clickForEmailStyle: {
    borderTopColor: '#FFFFFF',
    borderTopWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'center',
  },
};

export {SuggestionCard};
