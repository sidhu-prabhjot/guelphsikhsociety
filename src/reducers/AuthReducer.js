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
  LOAD_OUT,
  SET_INITIAL_EMAIL,
  SET_INITIAL_PASSWORD,
  REMEMBER_ME_TRUE,
  REMEMBER_ME_FALSE,
  SET_INITIAL_REMEMBER_ME,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  signUpSuccess: false,
  error: '',
  user: null,
  signInSuccess: null,
  admin: false,
  logOutSuccess: false,
  rememberMe: false,
  rememberMeText: 'OFF',
  rememberMeColor: '#ED213A',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case SET_INITIAL_EMAIL:
      return {...state, email: action.payload};
    case SET_INITIAL_PASSWORD:
      return {...state, password: action.payload};
    case CLEAR_ERROR:
      return {...state, error: '', signUpSuccess: false};
    case LOAD_USER:
      return {...state, loading: true, error: ''};
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: '',
        password: '',
        signInSuccess: true,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        password: '',
        error: 'FAILED TO LOG IN',
        loading: false,
        signInSuccess: false,
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        signUpSuccess: true,
        error: '',
        email: '',
        password: '',
      };
    case SIGNUP_USER_FAIL:
      return {
        ...state,
        error: 'FAILED TO SIGN UP',
        loading: false,
        email: '',
        password: '',
      };
    case CHECK_ADMIN:
      return {...state, admin: true};
    case CHECK_ADMIN_FALSE:
      return {...state, admin: false};
    case LOG_OUT:
      return {
        ...state,
        password: '',
        email: '',
        logOutSuccess: true,
        loading: false,
      };
    case LOAD_OUT:
      return {...state, loading: false};
    case REMEMBER_ME_TRUE:
      return {...state, rememberMe: true, rememberMeText: 'ON'};
    case REMEMBER_ME_FALSE:
      return {
        ...state,
        rememberMe: false,
        rememberMeText: 'OFF',
        rememberMeColor: '#ED213A',
      };
    case SET_INITIAL_REMEMBER_ME:
      return {...state, rememberMeText: action.payload};
    default:
      return state;
  }
};
