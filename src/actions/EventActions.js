import firebase from 'firebase';

import {
  EVENT_TITLE_CHANGED,
  EVENT_HOLDER_CHANGED,
  EVENT_DESCRIPTION_CHANGED,
  START_MONTH_CHANGED,
  START_DATE_CHANGED,
  START_YEAR_CHANGED,
  END_MONTH_CHANGED,
  END_DATE_CHANGED,
  END_YEAR_CHANGED,
  EVENT_TYPE_CHANGED,
  EVENT_CREATE,
  LOAD_USER,
  FETCH_EVENTS,
  FETCH_EMAILS,
  SEARCH_EVENT_TITLE_CHANGED,
  SEARCHING_EVENTS,
  START_EVENT_HOUR_CHANGED,
  START_EVENT_MINUTE_CHANGED,
  START_EVENT_MERIDIEM_CHANGED,
  END_EVENT_HOUR_CHANGED,
  END_EVENT_MINUTE_CHANGED,
  END_EVENT_MERIDIEM_CHANGED,
  CLEAR_SEARCH_BAR,
  EVENT_CREATE_FAILED,
  EVENT_FORM_INCOMPLETE,
  CLEAR_EVENT_INPUTS,
  LOAD_EVENT_LIST,
  OPEN_CREATE_EVENT_MODAL,
  CLOSE_CREATE_EVENT_MODAL,
} from './types';

//action for opening the popup modal in the event creation form
export const openCreateEventModal = () => {
  return {
    type: OPEN_CREATE_EVENT_MODAL,
  };
};

//actions for closing the popup modal in teh event creation form
export const closeCreateEventModal = () => {
  return {
    type: CLOSE_CREATE_EVENT_MODAL,
  };
};

//action creator for if the email text input is changed
export const eventTitleChanged = text => {
  return {
    type: EVENT_TITLE_CHANGED,
    payload: text,
  };
};

//action creator for if the email text input is changed
export const eventHolderChanged = text => {
  return {
    type: EVENT_HOLDER_CHANGED,
    payload: text,
  };
};

export const eventDescriptionChanged = text => {
  return {
    type: EVENT_DESCRIPTION_CHANGED,
    payload: text,
  };
};

export const startMonthChanged = value => {
  return {
    type: START_MONTH_CHANGED,
    payload: value,
  };
};

export const startDateChanged = value => {
  return {
    type: START_DATE_CHANGED,
    payload: value,
  };
};

export const startYearChanged = value => {
  return {
    type: START_YEAR_CHANGED,
    payload: value,
  };
};

export const endMonthChanged = value => {
  return {
    type: END_MONTH_CHANGED,
    payload: value,
  };
};

export const endDateChanged = value => {
  return {
    type: END_DATE_CHANGED,
    payload: value,
  };
};

export const endYearChanged = value => {
  return {
    type: END_YEAR_CHANGED,
    payload: value,
  };
};

export const searchEventChanged = text => {
  return {
    type: SEARCH_EVENT_TITLE_CHANGED,
    payload: text,
  };
};

export const eventTypeChanged = type => {
  return {
    type: EVENT_TYPE_CHANGED,
    payload: type,
  };
};

export const startEventHourChanged = value => {
  return {
    type: START_EVENT_HOUR_CHANGED,
    payload: value,
  };
};

export const startEventMinuteChanged = value => {
  return {
    type: START_EVENT_MINUTE_CHANGED,
    payload: value,
  };
};

export const startEventMeridiemChanged = value => {
  return {
    type: START_EVENT_MERIDIEM_CHANGED,
    payload: value,
  };
};

export const endEventHourChanged = value => {
  return {
    type: END_EVENT_HOUR_CHANGED,
    payload: value,
  };
};

export const endEventMinuteChanged = value => {
  return {
    type: END_EVENT_MINUTE_CHANGED,
    payload: value,
  };
};

export const endEventMeridiemChanged = value => {
  return {
    type: END_EVENT_MERIDIEM_CHANGED,
    payload: value,
  };
};

export const searchingEvents = () => {
  return {
    type: SEARCHING_EVENTS,
  };
};

export const createEvent = ({
  eventTitle,
  eventHolder,
  startMonth,
  startDate,
  startYear,
  endMonth,
  endDate,
  endYear,
  eventType,
  timeStampV5,
  eventDescription,
  startHour,
  startMinute,
  startMeridiem,
  endHour,
  endMinute,
  endMeridiem,
  status,
}) => {
  return dispatch => {
    dispatch({type: LOAD_USER});

    firebase
      .database()
      .ref('Events/')
      //to add data to the database, the .push method is used. It is: .push({data objects wanted passed through})
      .push({
        eventTitle,
        eventHolder,
        eventDescription,
        startMonth,
        startDate,
        startYear,
        endMonth,
        endDate,
        endYear,
        eventType,
        startHour,
        startMinute,
        startMeridiem,
        endHour,
        endMinute,
        endMeridiem,
        status,
        timeStampV5,
      })
      //when the information is added to the database then return user to employeeList.(.pop returns to the previous scene)
      //by passing in type: 'reset', router-flux resets the enter stack so it has no idea where it was before
      .then(() => {
        dispatch({type: EVENT_CREATE});
      })
      .catch(() => {
        dispatch({type: EVENT_CREATE_FAILED});
      });
  };
};

export const eventFetch = () => {
  return dispatch => {
    dispatch({type: LOAD_EVENT_LIST});

    firebase
      .database()
      .ref('/Events')
      /*The code below says that whenver there is data that comes from the referenced path, and into the value, then
      call the arrow function with an object ot describe the data (which is snapshot)*/
      //the snapshot object is not the array of data, but can be used to get a handle on the data
      //the good thing about this firebase fetch method is, once it is run once, each time the database is updated, it will automatically re-run
      .on('value', snapshot => {
        //snapshot.val() is the actual way to get access to the data
        dispatch({type: FETCH_EVENTS, payload: snapshot.val()});
      });
  };
};

export const emailFetch = () => {
  return dispatch => {
    firebase
      .database()
      .ref('/Emails')
      /*The code below says that whenver there is data that comes from the referenced path, and into the value, then
      call the arrow function with an object ot describe the data (which is snapshot)*/
      //the snapshot object is not the array of data, but can be used to get a handle on the data
      //the good thing about this firebase fetch method is, once it is run once, each time the database is updated, it will automatically re-run
      .on('value', snapshot => {
        //snapshot.val() is the actual way to get access to the data
        dispatch({type: FETCH_EMAILS, payload: snapshot.val()});
      });
  };
};

export const clearSearchBar = () => {
  return {
    type: CLEAR_SEARCH_BAR,
  };
};

export const eventFormIncomplete = () => {
  return {
    type: EVENT_FORM_INCOMPLETE,
  };
};

export const clearEventInputs = () => {
  return {
    type: CLEAR_EVENT_INPUTS,
  };
};

export const updateEventActive = key => {
  return dispatch => {
    firebase
      .database()
      .ref('/Events')
      .child(key)
      .update({status: 'active'});
  };
};

export const updateEventUpcoming = key => {
  return dispatch => {
    firebase
      .database()
      .ref('/Events')
      .child(key)
      .update({status: 'upcoming'});
  };
};

export const updateEventComplete = key => {
  return dispatch => {
    firebase
      .database()
      .ref('/Events')
      .child(key)
      .update({status: 'complete'});
  };
};
