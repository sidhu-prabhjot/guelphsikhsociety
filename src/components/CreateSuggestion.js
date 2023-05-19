import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import {Input, Button, CardSection, ToMainScreen} from './common';
import {
  titleChanged,
  suggestionChanged,
  createSuggestion,
  fullNameChanged,
  suggestionEmailChanged,
  clearSuggestionInputs,
  suggestionFormIncomplete,
} from '../actions';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

class CreateSuggestion extends Component {
  componentDidMount() {
    this.props.clearSuggestionInputs();
  }

  onTitleChanged(text) {
    this.props.titleChanged(text);
  }

  onSuggestionChanged(suggestionText) {
    this.props.suggestionChanged(suggestionText);
  }

  onFullNameChanged(text) {
    this.props.fullNameChanged(text);
  }

  onSuggestionEmailChanged(text) {
    this.props.suggestionEmailChanged(text);
  }

  onButtonPress() {
    const year = new Date().getFullYear(); //To get the Current Year
    const month = new Date().getMonth() + 1; //To get the Current Month
    const date = new Date().getDate(); //To get the Current Date
    const hours = new Date().getHours(); //To get the Current Hours
    const min = new Date().getMinutes(); //To get the Current Minutes
    const sec = new Date().getSeconds(); //To get the Current Seconds

    const timeStampV5 =
      year + '/' + month + '/' + date + '/' + hours + '/' + min + '/' + sec;

    const {title, suggestion, fullName, suggestionEmail} = this.props;

    if (
      title === '' ||
      suggestion === '' ||
      fullName === '' ||
      suggestionEmail === ''
    ) {
      this.props.suggestionFormIncomplete();
    } else {
      //when the onButtonPress method is called, the name, phone and shift values are passed to the employeeCreate action creator
      this.props.createSuggestion({
        title,
        suggestion,
        fullName,
        suggestionEmail,
        timeStampV5,
      });
    }
  }

  checkResponseText() {
    if (this.props.suggestionResponse === 'SUGGESTION SUCCESSFULLY SENT') {
      return (
        <Text style={styles.successResponseStyle}>
          SUGGESTION SUCCESSFULLY SENT
        </Text>
      );
    } else if (this.props.suggestionResponse === 'FAILED TO SEND SUGGESTION') {
      return (
        <Text style={styles.failureResponseStyle}>
          FAILED TO SEND SUGGESTION
        </Text>
      );
    } else if (this.props.suggestionResponse === 'SUGGESTION FORM INCOMPLETE') {
      return (
        <Text style={styles.failureResponseStyle}>
          SUGGESTION FORM INCOMPLETE
        </Text>
      );
    } else {
    }
  }

  render() {
    return (
      <ScrollView style={styles.containerStyle}>
        <LinearGradient
          colors={['#FFFFFF', '#FFFFFF']}
          style={styles.LinearGradient}>
          <ToMainScreen
            headerText="Create A Suggestion"
            style={styles.headerStyle}
          />
          <CardSection style={styles.inputStyle}>
            <Input
              label="*Full Name:"
              placeholder="First Name Last Name"
              onChangeText={this.onFullNameChanged.bind(this)}
              value={this.props.fullName}
              multiline={true}
            />
          </CardSection>

          <CardSection style={styles.inputStyle}>
            <Input
              label="*Email:"
              placeholder="example@gmail.com"
              onChangeText={this.onSuggestionEmailChanged.bind(this)}
              value={this.props.suggestionEmail}
              multiline={true}
              keyboardType={'email-address'}
            />
          </CardSection>

          <CardSection style={styles.inputStyle}>
            <Input
              label="*Subject:"
              placeholder="suggestion subject"
              onChangeText={this.onTitleChanged.bind(this)}
              value={this.props.title}
            />
          </CardSection>

          <CardSection style={styles.inputStyle}>
            <Input
              label="*Suggestion:"
              placeholder="enter your suggestion here"
              onChangeText={this.onSuggestionChanged.bind(this)}
              value={this.props.suggestion}
              multiline={true}
            />
          </CardSection>

          <CardSection style={styles.responseViewStyle}>
            <Text>{this.checkResponseText()}</Text>
          </CardSection>

          <CardSection style={styles.buttonSectionStyle}>
            <Button onPress={this.onButtonPress.bind(this)}>
              Upload Suggestion
            </Button>
          </CardSection>
        </LinearGradient>
      </ScrollView>
    );
  }
}

const styles = {
  LinearGradient: {
    flex: 1,
  },
  containerStyle: {
    flex: 1,
  },
  inputStyle: {
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: 'transparent',
    borderColor: '#ffa41b',
    marginBottom: 32,
  },
  headerStyle: {
    marginBottom: 24,
  },
  buttonSectionStyle: {
    marginTop: 32,
  },
  responseViewStyle: {
    justifyContent: 'center',
  },
  successResponseStyle: {
    color: '#008000',
    fontSize: 18,
  },
  failureResponseStyle: {
    color: '#FF0000',
    fontSize: 18,
  },
};

const mapStateToProps = state => {
  return {
    title: state.comm.title,
    suggestion: state.comm.suggestion,
    fullName: state.comm.fullName,
    suggestionEmail: state.comm.suggestionEmail,
    suggestionResponse: state.comm.suggestionResponse,
  };
};

export default connect(
  mapStateToProps,
  {
    titleChanged,
    suggestionChanged,
    createSuggestion,
    fullNameChanged,
    suggestionEmailChanged,
    clearSuggestionInputs,
    suggestionFormIncomplete,
  },
)(CreateSuggestion);
