import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
//components are imported from the common directory
import {CardSection, Button, Input, Spinner, Header} from './common';
//the connect method is imported so state, can be mapped to props for use inside the component
import {connect} from 'react-redux';
//the action creators are imported, and passed into the connect method as a second arguement, so their states can be mapped to the props
import {
  emailChanged,
  passwordChanged,
  loginUser,
  toSignUp,
  setInitialPassword,
  setInitialEmail,
  fetchConstructionImages,
  fetchFundraisingImages,
  fetchSikhHeritageImages,
  fetchCanadaDayImages,
  fetchSangatImages,
  fetchBillboard,
  rememberMeTrue,
  rememberMeFalse,
  setInitialRememberMe,
} from '../actions';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

class LoginForm extends Component {
  componentDidMount() {
    this.props.toSignUp();
    this.retrieveUserData();
    this.retrieveRememberMeData();
  }
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
  onLoginPress = async () => {
    const {email, password} = this.props;
    const rememberMeState = await AsyncStorage.getItem('rememberMeAsync');
    if (rememberMeState === 'ON') {
      try {
        this.props.loginUser({email, password});
        this.props.fetchConstructionImages();
        this.props.fetchFundraisingImages();
        this.props.fetchSikhHeritageImages();
        this.props.fetchCanadaDayImages();
        this.props.fetchSangatImages();
        this.props.fetchBillboard();
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
      } catch (e) {
        console.log(e);
      }
    } else if (rememberMeState === 'OFF') {
      try {
        this.props.loginUser({email, password});
        this.props.fetchConstructionImages();
        this.props.fetchFundraisingImages();
        this.props.fetchSikhHeritageImages();
        this.props.fetchCanadaDayImages();
        this.props.fetchSangatImages();
        this.props.fetchBillboard();
        await AsyncStorage.setItem('email', '');
        await AsyncStorage.setItem('password', '');
      } catch (e) {
        console.log(e);
      }
    }
  };

  //function to recieve the user's login data when the app is opened
  retrieveUserData = async () => {
    try {
      const userEmail = await AsyncStorage.getItem('email');
      const userPassword = await AsyncStorage.getItem('password');
      this.props.setInitialEmail(userEmail);
      this.props.setInitialPassword(userPassword);
      if (userEmail !== null) {
        console.log(userEmail);
      }
      if (userPassword !== null) {
        console.log(userPassword);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  retrieveRememberMeData = async () => {
    try {
      const rememberMeState = await AsyncStorage.getItem('rememberMeAsync');
      this.props.setInitialRememberMe(rememberMeState);
      if (rememberMeState !== null) {
        console.log(rememberMeState);
      }
      if (rememberMeState === null) {
        const rememberMeStateNew = await AsyncStorage.setItem(
          'rememberMeAsync',
          'OFF',
        );
        this.props.rememberMeFalse();
        this.props.setInitialRememberMe(rememberMeStateNew);
      }
    } catch (error) {}
  };

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
        <CardSection style={styles.errorStyle}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </CardSection>
      );
    } else {
    }
  }

  toSignUpForm() {
    this.props.toSignUp();
    Actions.SignUp();
  }

  activateRememberMe = async () => {
    if (this.props.rememberMe) {
      this.props.rememberMeFalse();
      await AsyncStorage.setItem('rememberMeAsync', 'OFF');
    } else {
      this.props.rememberMeTrue();
      await AsyncStorage.setItem('rememberMeAsync', 'ON');
    }
  };

  checkRememberMeText() {
    if (this.props.rememberMeText === 'ON') {
      return (
        <Text style={styles.rememberMeTextOn}>
          Remember Me: {this.props.rememberMeText}
        </Text>
      );
    } else if (this.props.rememberMeText === 'OFF') {
      return (
        <Text style={styles.rememberMeTextOff}>
          Remember Me: {this.props.rememberMeText}
        </Text>
      );
    }
  }

  //the main part of the LoginForm component
  render() {
    return (
      <View style={styles.viewStyle}>
        <LinearGradient
          colors={['#FFFFFF', '#FFFFFF']}
          style={styles.LinearGradient}>
          <Header headerText="Guelph Sikh Society" style={styles.headerStyle} />
          <CardSection style={styles.inputStyle}>
            {/*reference the onEmailChanged method, to call the action creator, and call it in the onChangeText so the text prop can be passed through*/}
            <Input
              label="Email:"
              placeholder="example@gmail.com"
              onChangeText={this.onEmailChanged.bind(this)}
              //The value of the text input becomes the updated state of the email
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

          {/*The renderSpinner helper method is called to decide whether or not the spinner should be renderd*/}
          {this.renderSpinner()}

          {/*The renderError helper method is called to decide whether or not the error should be rendered*/}
          {this.renderError()}

          <CardSection style={styles.buttonStyle}>
            <Button onPress={this.onLoginPress.bind(this)}>Log In</Button>
          </CardSection>

          <CardSection style={styles.buttonStyle}>
            <Button onPress={this.toSignUpForm.bind(this)}>Sign Up</Button>
          </CardSection>

          <CardSection style={styles.rememberButtonStyle}>
            <TouchableOpacity onPress={this.activateRememberMe.bind(this)}>
              {this.checkRememberMeText()}
            </TouchableOpacity>
          </CardSection>
        </LinearGradient>
      </View>
    );
  }
}

//a style is created for the error messaged
const styles = {
  errorStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
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
  buttonStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    marginBottom: 24,
  },
  inputStyle: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
    backgroundColor: 'transparent',
    borderColor: '#ffa41b',
  },
  headerStyle: {
    backgroundColor: '#ffa41b',
    marginBottom: 64,
  },
  designTextStyle: {
    alignSelf: 'center',
  },
  rememberMeTextOn: {
    color: '#008000',
    fontSize: 18,
  },
  rememberMeTextOff: {
    color: '#FF0000',
    fontSize: 18,
  },
  rememberButtonStyle: {
    alignSelf: 'center',
  },
};

//the mapStateToProps function is defined, and the global stat is passed through. The props get their values from the AuthReducer which was defined to have a key of auth
const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    loading: state.auth.loading,
    error: state.auth.error,
    signUpSuccess: state.auth.signUpSuccess,
    signInSuccess: state.auth.signInSuccess,
    rememberMe: state.auth.rememberMe,
    rememberMeText: state.auth.rememberMeText,
    rememberMeColor: state.auth.rememberMeColor,
  };
};

//the connect mehtod is defined, and mapStateToProps props function is the first arguement, and the second arguemnt is all the action creators that are need in the component
export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser,
    toSignUp,
    setInitialEmail,
    setInitialPassword,
    fetchConstructionImages,
    fetchFundraisingImages,
    fetchSikhHeritageImages,
    fetchCanadaDayImages,
    fetchSangatImages,
    fetchBillboard,
    rememberMeTrue,
    rememberMeFalse,
    setInitialRememberMe,
  },
)(LoginForm);
