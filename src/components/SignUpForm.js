import React, {Component} from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Input, CardSection, Spinner, ReturnHeader} from './common';
import {connect} from 'react-redux';
import {signUpUser, emailChanged, passwordChanged} from '../actions';

class SignUpForm extends Component {
  //a helper method is created to pass the text taken from the email input to the emailChanged action creator
  onEmailChanged(text) {
    //pass the text from the onChangeText to the emailChanged action creator
    //call the action creator by using this.props.*action creator
    this.props.emailChanged(text);
  }

  //a helper method is created to pass the text taken from the password input to the passwordChanged action creator
  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  //a helper method is created to call the loginUser action creator when the login button is pressed
  onSignUpPress() {
    const {email, password} = this.props;

    this.props.signUpUser({email, password});
  }

  //a helper method creatoed to render the error or not
  renderSpinner() {
    //if loading is true, then the spinner will be rendered, otherwise nothing will be
    if (this.props.loading) {
      return (
        <CardSection>
          <Spinner size="large" />
        </CardSection>
      );
    } else {
    }
  }

  //a helper method is created to decide whether or no the error message should be renderd
  renderError() {
    //if the error prop has a value, then it will be renders, otherwise nothing will be rendered
    if (this.props.error) {
      return (
        <CardSection>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </CardSection>
      );
    } else {
    }
  }

  renderButton() {
    if (this.props.signUpSuccess) {
      return (
        <CardSection style={styles.successStyle}>
          <Text style={styles.successTextStyle}>Sign Up Was Successful</Text>
        </CardSection>
      );
    } else {
      return (
        <CardSection>
          <Button onPress={this.onSignUpPress.bind(this)}>
            Create Account
          </Button>
        </CardSection>
      );
    }
  }

  render() {
    return (
      <LinearGradient
        colors={['#FFFFFF', '#FFFFFF']}
        style={styles.LinearGradient}>
        <View>
          <ReturnHeader headerText="Sign Up" style={styles.headerStyle} />
          <CardSection style={styles.inputStyle}>
            <Input
              label="Email:"
              placeholder="example@gmail.com"
              onChangeText={this.onEmailChanged.bind(this)}
              value={this.props.email}
              keyboardType={'email-address'}
            />
          </CardSection>

          <CardSection style={styles.inputStyle}>
            <Input
              label="Password:"
              placeholder="password"
              secureTextEntry
              onChangeText={this.onPasswordChanged.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          {this.renderError()}

          {this.renderSpinner()}

          {this.renderButton()}
        </View>
        <View style={styles.subTextViewStyle}>
          <Text style={styles.notificationTextStyle}>
            *Your email will be added to an email list for notifications
          </Text>
        </View>
      </LinearGradient>
    );
  }
}

//a style is created for the error messaged
const styles = {
  subTextViewStyle: {
    alignSelf: 'center',
    padding: 8,
  },
  notificationTextStyle: {
    textAlign: 'center',
  },
  errorTextStyle: {
    fontSize: 24,
    color: 'red',
    flex: 1,
    textAlign: 'center',
  },
  viewStyle: {
    flex: 1,
  },
  LinearGradient: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor: '#ffa41b',
    marginBottom: 64,
  },
  inputStyle: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
    backgroundColor: 'transparent',
    borderColor: '#F68B1F',
  },
  successTextStyle: {
    fontSize: 24,
    color: 'green',
    flex: 1,
    textAlign: 'center',
  },
  successStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    loading: state.auth.loading,
    error: state.auth.error,
    signUpSuccess: state.auth.signUpSuccess,
  };
};

export default connect(
  mapStateToProps,
  {signUpUser, emailChanged, passwordChanged},
)(SignUpForm);
