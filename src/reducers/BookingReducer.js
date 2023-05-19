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
} from '../actions/types';

const INITIAL_STATE = {
  bookingEventHolder: '',
  bookingEmail: '',
  bookingPhoneNumber: '',
  bookingEventTitle: '',
  bookingStartHour: '1',
  bookingStartMin: '15',
  bookingStartMeridiem: 'AM',
  bookingEndHour: '1',
  bookingEndMin: '15',
  bookingEndMeridiem: 'AM',
  bookingEventType: 'Prayer',
  bookingStartMonth: 'Not Available',
  bookingStartDate: 'Not Available',
  bookingStartYear: 'Not Available',
  bookingEndMonth: 'Not Available',
  bookingEndDate: 'Not Available',
  bookingEndYear: 'Not Available',
  bookingResponse: '',
  bookingLoading: false,
  eventRequestsObject: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKING_EVENT_HOLDER_CHANGED:
      return {...state, bookingEventHolder: action.payload};
    case BOOKING_EMAIL_CHANGED:
      return {...state, bookingEmail: action.payload};
    case BOOKING_PHONE_NUMBER_CHANGED:
      return {...state, bookingPhoneNumber: action.payload};
    case BOOKING_EVENT_TITLE_CHANGED:
      return {...state, bookingEventTitle: action.payload};
    case BOOKING_START_EVENT_HOUR_CHANGED:
      return {...state, bookingStartHour: action.payload};
    case BOOKING_START_EVENT_MINUTE_CHANGED:
      return {...state, bookingStartMin: action.payload};
    case BOOKING_START_EVENT_MERIDIEM_CHANGED:
      return {...state, bookingStartMeridiem: action.payload};
    case BOOKING_END_EVENT_HOUR_CHANGED:
      return {...state, bookingEndHour: action.payload};
    case BOOKING_END_EVENT_MINUTE_CHANGED:
      return {...state, bookingEndMin: action.payload};
    case BOOKING_END_EVENT_MERIDIEM_CHANGED:
      return {...state, bookingEndMeridiem: action.payload};
    case BOOKING_EVENT_TYPE_CHANGED:
      return {...state, bookingEventType: action.payload};
    case BOOKING_START_MONTH_CHANGED:
      return {...state, bookingStartMonth: action.payload};
    case BOOKING_START_DATE_CHANGED:
      return {...state, bookingStartDate: action.payload};
    case BOOKING_START_YEAR_CHANGED:
      return {...state, bookingStartYear: action.payload};
    case BOOKING_END_MONTH_CHANGED:
      return {...state, bookingEndMonth: action.payload};
    case BOOKING_END_DATE_CHANGED:
      return {...state, bookingEndDate: action.payload};
    case BOOKING_END_YEAR_CHANGED:
      return {...state, bookingEndYear: action.payload};
    case LOAD_REQUEST:
      return {...state, bookingLoading: true};
    case REQUEST_CREATE:
      return {...state, bookingLoading: false, bookingResponse: 'REQUEST SENT'};
    case REQUEST_FORM_INCOMPLETE:
      return {...state, bookingResponse: 'REQUEST FORM INCOMPLETE'};
    case FETCH_EVENT_REQUESTS:
      return {
        ...state,
        eventRequestsObject: action.payload,
      };
    case REQUEST_CREATE_FAILED:
      return {
        ...state,
        bookingLoading: false,
        bookingResponse: 'REQUEST FAILED TO SEND',
      };
    case CLEAR_INPUTS:
      return {
        ...state,
        bookingEventHolder: '',
        bookingEmail: '',
        bookingPhoneNumber: '',
        bookingEventTitle: '',
        bookingStartHour: '1',
        bookingStartMin: '15',
        bookingStartMeridiem: 'AM',
        bookingEndHour: '1',
        bookingEndMin: '15',
        bookingEndMeridiem: 'AM',
        bookingEventType: 'Prayer',
        bookingStartMonth: 'Not Available',
        bookingStartDate: 'Not Available',
        bookingStartYear: 'Not Available',
        bookingEndMonth: 'Not Available',
        bookingEndDate: 'Not Available',
        bookingEndYear: 'Not Available',
        bookingResponse: '',
      };
    default:
      return state;
  }
};
