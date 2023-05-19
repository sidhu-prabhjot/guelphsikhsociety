import firebase from 'firebase';

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
} from './types';

export const titleChanged = text => {
  return {
    type: TITLE_CHANGED,
    payload: text,
  };
};

export const suggestionChanged = suggestionText => {
  return {
    type: SUGGESTION_CHANGED,
    payload: suggestionText,
  };
};

export const fullNameChanged = text => {
  return {
    type: FULL_NAME_CHANGED,
    payload: text,
  };
};

export const suggestionEmailChanged = text => {
  return {
    type: SUGGESTION_EMAIL_CHANGED,
    payload: text,
  };
};

export const phoneNumberChanged = text => {
  return {
    type: PHONE_NUMBER_CHANGED,
    payload: text,
  };
};

export const createSuggestion = ({
  title,
  suggestion,
  fullName,
  suggestionEmail,
  timeStampV5,
}) => {
  return dispatch => {
    dispatch({type: LOAD_USER});

    firebase
      .database()
      .ref('Suggestion/')
      //to add data to the database, the .push method is used. It is: .push({data objects wanted passed through})
      .push({fullName, suggestionEmail, title, suggestion, timeStampV5})
      //when the information is added to the database then return user to employeeList.(.pop returns to the previous scene)
      //by passing in type: 'reset', router-flux resets the enter stack so it has no idea where it was before
      .then(() => {
        dispatch({type: SUGGESTION_CREATE});
      })
      .catch(() => {
        dispatch({type: SUGGESTION_CREATE_FAILED});
      });

    firebase
      .database()
      .ref('Emails/')
      //to add data to the database, the .push method is used. It is: .push({data objects wanted passed through})
      .push({suggestionEmail})
      //when the information is added to the database then return user to employeeList.(.pop returns to the previous scene)
      //by passing in type: 'reset', router-flux resets the enter stack so it has no idea where it was before
      .then(() => {
        console.log('Email Added');
      });
  };
};

export const suggestionFetch = () => {
  return dispatch => {
    firebase
      .database()
      .ref('/Suggestion')
      /*The code below says that whenver there is data that comes from the referenced path, and into the value, then
      call the arrow function with an object ot describe the data (which is snapshot)*/
      //the snapshot object is not the array of data, but can be used to get a handle on the data
      //the good thing about this firebase fetch method is, once it is run once, each time the database is updated, it will automatically re-run
      .on('value', snapshot => {
        //snapshot.val() is the actual way to get access to the data
        dispatch({type: FETCH_SUGGESTIONS, payload: snapshot.val()});
      });
  };
};

export const fetchBillboard = () => {
  return dispatch => {
    firebase
      .database()
      .ref('/Images')
      .on('value', snapshot => {
        dispatch({type: FETCH_BILLBOARD, payload: snapshot.val()});
      });
  };
};

export const clearSuggestionInputs = () => {
  return {
    type: CLEAR_SUGGESTION_INPUTS,
  };
};

export const suggestionFormIncomplete = () => {
  return {
    type: SUGGESTION_FORM_INCOMPLETE,
  };
};
