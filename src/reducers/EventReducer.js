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
} from '../actions/types';

const INITIAL_STATE = {
  eventTitle: '',
  eventHolder: '',
  eventDescription: '',
  startMonth: '',
  startDate: '',
  startYear: '',
  endMonth: '',
  endDate: '',
  endYear: '',
  eventType: 'Prayer',
  startHour: '1',
  startMinute: '00',
  startMeridiem: 'AM',
  endHour: '1',
  endMinute: '00',
  endMeridiem: 'AM',
  searchEventTitle: '',
  searching: false,
  response: '',
  eventsObject: {},
  emailsObject: {},
  eventLoading: false,
  eventModalOpen: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EVENT_TITLE_CHANGED:
      return {...state, eventTitle: action.payload};
    case EVENT_HOLDER_CHANGED:
      return {...state, eventHolder: action.payload};
    case EVENT_DESCRIPTION_CHANGED:
      return {...state, eventDescription: action.payload};
    case START_MONTH_CHANGED:
      return {...state, startMonth: action.payload};
    case START_DATE_CHANGED:
      return {...state, startDate: action.payload};
    case START_YEAR_CHANGED:
      return {...state, startYear: action.payload};
    case END_MONTH_CHANGED:
      return {...state, endMonth: action.payload};
    case END_DATE_CHANGED:
      return {...state, endDate: action.payload};
    case END_YEAR_CHANGED:
      return {...state, endYear: action.payload};
    case EVENT_TYPE_CHANGED:
      return {...state, eventType: action.payload};
    case SEARCH_EVENT_TITLE_CHANGED:
      return {...state, searchEventTitle: action.payload};
    case START_EVENT_HOUR_CHANGED:
      return {...state, startHour: action.payload};
    case START_EVENT_MINUTE_CHANGED:
      return {...state, startMinute: action.payload};
    case START_EVENT_MERIDIEM_CHANGED:
      return {...state, startMeridiem: action.payload};
    case END_EVENT_HOUR_CHANGED:
      return {...state, endHour: action.payload};
    case END_EVENT_MINUTE_CHANGED:
      return {...state, endMinute: action.payload};
    case END_EVENT_MERIDIEM_CHANGED:
      return {...state, endMeridiem: action.payload};
    case SEARCHING_EVENTS:
      return {...state, searching: false};
    case EVENT_CREATE:
      return {
        ...state,
        response: 'EVENT SUCCESSFULLY CREATED',
        eventTitle: '',
        eventHolder: '',
        eventDescription: '',
        startMonth: '',
        startDate: '',
        startYear: '',
        startHour: '1',
        startMin: '00',
        startMeridiem: 'AM',
        endHour: '1',
        endMin: '00',
        endMeridiem: 'AM',
        eventType: 'Prayer',
        endMonth: '',
        endDate: '',
        endYear: '',
        eventModalOpen: false,
      };
    case CLEAR_EVENT_INPUTS:
      return {
        ...state,
        response: '',
        eventTitle: '',
        eventHolder: '',
        eventDescription: '',
        startMonth: '',
        startDate: '',
        startYear: '',
        startHour: '1',
        startMin: '00',
        startMeridiem: 'AM',
        endHour: '1',
        endMin: '00',
        endMeridiem: 'AM',
        eventType: 'Prayer',
        endMonth: '',
        endDate: '',
        endYear: '',
      };
    case EVENT_CREATE_FAILED:
      return {...state, response: 'FAILED TO CREATE EVENT'};
    case EVENT_FORM_INCOMPLETE:
      return {...state, response: 'EVENT CREATION FORM INCOMPLETE'};
    case FETCH_EVENTS:
      return {...state, eventsObject: action.payload, eventLoading: false};
    case FETCH_EMAILS:
      return {...state, emailsObject: action.payload};
    case CLEAR_SEARCH_BAR:
      return {...state, searchEventTitle: ''};
    case LOAD_EVENT_LIST:
      return {...state, eventLoading: true};
    case OPEN_CREATE_EVENT_MODAL:
      return {...state, eventModalOpen: true, response: ''};
    case CLOSE_CREATE_EVENT_MODAL:
      return {...state, eventModalOpen: false};
    default:
      return state;
  }
};
