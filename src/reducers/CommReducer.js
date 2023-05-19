import {
  TITLE_CHANGED,
  SUGGESTION_CHANGED,
  SUGGESTION_CREATE,
  FETCH_SUGGESTIONS,
  LOAD_USER,
  FETCH_BILLBOARD,
  FULL_NAME_CHANGED,
  SUGGESTION_EMAIL_CHANGED,
  PHONE_NUMBER_CHANGED,
  CLEAR_SUGGESTION_INPUTS,
  SUGGESTION_CREATE_FAILED,
  SUGGESTION_FORM_INCOMPLETE,
} from '../actions/types';

const INITIAL_STATE = {
  title: '',
  suggestion: '',
  fullName: '',
  suggestionEmail: '',
  phoneNumber: '',
  suggestionsObject: {},
  billboard: {},
  suggestionResponse: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {...state, loading: true, error: ''};
    case TITLE_CHANGED:
      return {...state, title: action.payload};
    case SUGGESTION_CHANGED:
      return {...state, suggestion: action.payload};
    case SUGGESTION_CREATE:
      return {
        ...state,
        title: '',
        suggestion: '',
        fullName: '',
        suggestionEmail: '',
        phoneNumber: '',
        suggestionResponse: 'SUGGESTION SUCCESSFULLY SENT',
      };
    case SUGGESTION_CREATE_FAILED:
      return {...state, suggestionResponse: 'FAILED TO SEND SUGGESTION'};
    case SUGGESTION_FORM_INCOMPLETE:
      return {...state, suggestionResponse: 'SUGGESTION FORM INCOMPLETE'};
    case FETCH_SUGGESTIONS:
      return {...state, suggestionsObject: action.payload, loading: false};
    case FETCH_BILLBOARD:
      return {...state, billboard: action.payload};
    case FULL_NAME_CHANGED:
      return {...state, fullName: action.payload};
    case SUGGESTION_EMAIL_CHANGED:
      return {...state, suggestionEmail: action.payload};
    case PHONE_NUMBER_CHANGED:
      return {...state, phoneNumber: action.payload};
    case CLEAR_SUGGESTION_INPUTS:
      return {
        ...state,
        title: '',
        suggestion: '',
        fullName: '',
        suggestionEmail: '',
        phoneNumber: '',
        suggestionResponse: '',
      };
    default:
      return state;
  }
};
