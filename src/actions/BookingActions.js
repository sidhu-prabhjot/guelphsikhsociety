import firebase from 'firebase';

import {
  BOOKING_EVENT_HOLDER_CHANGED,
  BOOKING_EMAIL_CHANGED,
  BOOKING_PHONE_NUMBER_CHANGED,
  BOOKING_EVENT_TITLE_CHANGED,
  BOOKING_START_EVENT_HOUR_CHANGED,
  BOOKING_START_EVENT_MINUTE_CHANGED,
  BOOKING_START_EVENT_MERIDIEM_CHANGED,
  BOOKING_END_EVENT_HOUR_CHANGED,
  BOOKING_END_EVENT_MINUTE_CHANGED,
  BOOKING_END_EVENT_MERIDIEM_CHANGED,
  BOOKING_EVENT_TYPE_CHANGED,
  BOOKING_START_MONTH_CHANGED,
  BOOKING_START_DATE_CHANGED,
  BOOKING_START_YEAR_CHANGED,
  BOOKING_END_MONTH_CHANGED,
  BOOKING_END_DATE_CHANGED,
  BOOKING_END_YEAR_CHANGED,
  CLEAR_INPUTS,
  LOAD_REQUEST,
  REQUEST_CREATE,
  REQUEST_CREATE_FAILED,
  FETCH_EVENT_REQUESTS,
  REQUEST_FORM_INCOMPLETE,
} from './types';

//for changing the value fo the booking event holder input
export const bookingEventHolderChanged = text => {
  return {
    type: BOOKING_EVENT_HOLDER_CHANGED,
    payload: text,
  };
};

//for changing the value fo the booking event email input
export const bookingEmailChanged = text => {
  return {
    type: BOOKING_EMAIL_CHANGED,
    payload: text,
  };
};

//for changing the value fo the booking event phone number input
export const bookingPhoneNumberChanged = text => {
  return {
    type: BOOKING_PHONE_NUMBER_CHANGED,
    payload: text,
  };
};

//for changing the value fo the booking event start hour input
export const bookingStartHourChanged = value => {
  return {
    type: BOOKING_START_EVENT_HOUR_CHANGED,
    payload: value,
  };
};

//for changing the value fo the booking event start minute input
export const bookingStartMinChanged = value => {
  return {
    type: BOOKING_START_EVENT_MINUTE_CHANGED,
    payload: value,
  };
};

//for changing the value fo the booking event start meridiem input
export const bookingStartMeridiemChanged = value => {
  return {
    type: BOOKING_START_EVENT_MERIDIEM_CHANGED,
    payload: value,
  };
};

//for changing the value fo the booking event end hour input
export const bookingEndHourChanged = value => {
  return {
    type: BOOKING_END_EVENT_HOUR_CHANGED,
    payload: value,
  };
};

//for changing the value fo the booking event end minute input
export const bookingEndMinChanged = value => {
  return {
    type: BOOKING_END_EVENT_MINUTE_CHANGED,
    payload: value,
  };
};

//for changing the value fo the booking event end meridiem input
export const bookingEndMeridiemChanged = value => {
  return {
    type: BOOKING_END_EVENT_MERIDIEM_CHANGED,
    payload: value,
  };
};

//for changing the value fo the booking event type input
export const bookingEventTypeChanged = value => {
  return {
    type: BOOKING_EVENT_TYPE_CHANGED,
    payload: value,
  };
};

//for changing the value fo the booking event title input
export const bookingEventTitleChanged = text => {
  return {
    type: BOOKING_EVENT_TITLE_CHANGED,
    payload: text,
  };
};

//for changing the value fo the booking event title input
export const bookingStartMonthChanged = value => {
  return {
    type: BOOKING_START_MONTH_CHANGED,
    payload: value,
  };
};

//for changing the value fo the booking event title input
export const bookingStartDateChanged = value => {
  return {
    type: BOOKING_START_DATE_CHANGED,
    payload: value,
  };
};

//for changing the value fo the booking event title input
export const bookingStartYearChanged = value => {
  return {
    type: BOOKING_START_YEAR_CHANGED,
    payload: value,
  };
};

//for changing the value fo the booking event title input
export const bookingEndMonthChanged = value => {
  return {
    type: BOOKING_END_MONTH_CHANGED,
    payload: value,
  };
};

//for changing the value fo the booking event title input
export const bookingEndDateChanged = value => {
  return {
    type: BOOKING_END_DATE_CHANGED,
    payload: value,
  };
};

//for changing the value fo the booking event title input
export const bookingEndYearChanged = value => {
  return {
    type: BOOKING_END_YEAR_CHANGED,
    payload: value,
  };
};

export const clearInputs = () => {
  return {
    type: CLEAR_INPUTS,
  };
};

export const createRequest = ({
  bookingEventHolder,
  bookingEmail,
  bookingPhoneNumber,
  bookingEventTitle,
  bookingEventType,
  bookingStartMonth,
  bookingStartDate,
  bookingStartYear,
  bookingEndMonth,
  bookingEndDate,
  bookingEndYear,
  startTime,
  endTime,
  bookingStartMeridiem,
  bookingEndMeridiem,
  timeStampV5,
}) => {
  return dispatch => {
    dispatch({type: LOAD_REQUEST});

    firebase
      .database()
      .ref('EventRequests/')
      //to add data to the database, the .push method is used. It is: .push({data objects wanted passed through})
      .push({
        bookingEventHolder,
        bookingEmail,
        bookingPhoneNumber,
        bookingEventTitle,
        bookingEventType,
        bookingStartMonth,
        bookingStartDate,
        bookingStartYear,
        bookingEndMonth,
        bookingEndDate,
        bookingEndYear,
        startTime,
        endTime,
        bookingStartMeridiem,
        bookingEndMeridiem,
        timeStampV5,
      })
      //when the information is added to the database then return user to employeeList.(.pop returns to the previous scene)
      //by passing in type: 'reset', router-flux resets the enter stack so it has no idea where it was before
      .then(() => {
        dispatch({type: REQUEST_CREATE});
      })
      .catch(() => dispatch({type: REQUEST_CREATE_FAILED}));
  };
};

export const fetchEventRequests = () => {
  return dispatch => {
    firebase
      .database()
      .ref('/EventRequests')
      /*The code below says that whenver there is data that comes from the referenced path, and into the value, then
      call the arrow function with an object ot describe the data (which is snapshot)*/
      //the snapshot object is not the array of data, but can be used to get a handle on the data
      //the good thing about this firebase fetch method is, once it is run once, each time the database is updated, it will automatically re-run
      .on('value', snapshot => {
        //snapshot.val() is the actual way to get access to the data
        dispatch({type: FETCH_EVENT_REQUESTS, payload: snapshot.val()});
      });
  };
};

export const requestFormIncomplete = () => {
  return {
    type: REQUEST_FORM_INCOMPLETE,
  };
};
