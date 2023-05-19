import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOAD_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER_SUCCESS,
  CLEAR_ERROR,
  CHECK_ADMIN,
  CHECK_ADMIN_FALSE,
  LOG_OUT,
  SET_INITIAL_EMAIL,
  SET_INITIAL_PASSWORD,
  REMEMBER_ME_TRUE,
  REMEMBER_ME_FALSE,
  SET_INITIAL_REMEMBER_ME,
} from './types';

//action creator for if the email text input is changed
export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

//action creator for if the email text input is changed
export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const toSignUp = () => {
  return {
    type: CLEAR_ERROR,
  };
};

export const setInitialEmail = userEmail => {
  return {
    type: SET_INITIAL_EMAIL,
    payload: userEmail,
  };
};

export const setInitialPassword = userPassword => {
  return {
    type: SET_INITIAL_PASSWORD,
    payload: userPassword,
  };
};

export const loginUser = ({email, password}) => {
  //a type is created, and dispatched to return some data(loading)
  return dispatch => {
    dispatch({type: LOAD_USER});
    //call to firebase to attempt to sign in
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => dispatch({type: LOGIN_USER_FAIL}));
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });

  //this method will automatically navigate the user to the EmployeeList screens when login is successful
  //there is no need to import employeeList key because the Actions function deals with importing it
  Actions.accessed();
};

export const signUpUser = ({email, password}) => {
  return dispatch => {
    dispatch({type: LOAD_USER});

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => dispatch({type: SIGNUP_USER_SUCCESS, payload: user}))
      .catch(() => dispatch({type: SIGNUP_USER_FAIL}));

    firebase
      .database()
      .ref('Emails/')
      //to add data to the database, the .push method is used. It is: .push({data objects wanted passed through})
      .push({email})
      //when the information is added to the database then return user to employeeList.(.pop returns to the previous scene)
      //by passing in type: 'reset', router-flux resets the enter stack so it has no idea where it was before
      .then(() => {
        console.log('Hello, Created');
      });
  };
};

export const checkAdmin = () => {
  return {
    type: CHECK_ADMIN,
  };
};

export const checkAdminFalse = () => {
  return {
    type: CHECK_ADMIN_FALSE,
  };
};

export const logOut = () => {
  return dispatch => {
    dispatch({type: LOG_OUT});

    firebase.auth().signOut();
  };
};

export const rememberMeTrue = () => {
  return {
    type: REMEMBER_ME_TRUE,
  };
};

export const rememberMeFalse = () => {
  return {
    type: REMEMBER_ME_FALSE,
  };
};

export const setInitialRememberMe = rememberMeState => {
  return {
    type: SET_INITIAL_REMEMBER_ME,
    payload: rememberMeState,
  };
};
