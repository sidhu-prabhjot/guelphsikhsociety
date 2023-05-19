//text input types
export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const SET_INITIAL_EMAIL = 'set_initial_email';
export const SET_INITIAL_PASSWORD = 'set_initial_password';

//login types
export const LOAD_USER = 'load_user';
export const LOGIN_USER_FAIL = 'login_user_fail';
export const LOGIN_USER_SUCCESS = 'login_user_success';

//checking if the user wants their login information remembered
export const REMEMBER_ME_FALSE = 'remember_me_false';
export const REMEMBER_ME_TRUE = 'remember_me_true';
export const SET_INITIAL_REMEMBER_ME = 'set_initial_remember_me';

//sign up types
export const SIGNUP_USER_FAIL = 'signup_user_fail';
export const SIGNUP_USER_SUCCESS = 'signup_user_success';
export const CLEAR_ERROR = 'clear_error';

//suggestion creation types
export const TITLE_CHANGED = 'title_changed';
export const SUGGESTION_CHANGED = 'suggestion_changed';
export const SUGGESTION_CREATE = 'suggestion_create';
export const FULL_NAME_CHANGED = 'full_name_changed';
export const SUGGESTION_EMAIL_CHANGED = 'suggestion_email_changed';
export const PHONE_NUMBER_CHANGED = 'phone_number_changed';
export const CLEAR_SUGGESTION_INPUTS = 'clear_suggestion_inputs';
export const SUGGESTION_CREATE_FAILED = 'suggestion_create_failed';
export const SUGGESTION_FORM_INCOMPLETE = 'suggestion_form_incomplete';

//for fetching data from firebase realtime database
export const FETCH_SUGGESTIONS = 'fetch_suggestions';

//checking for admin user
export const CHECK_ADMIN = 'check_admin';
export const CHECK_ADMIN_FALSE = 'check_admin_false';

//event creation types
export const EVENT_TITLE_CHANGED = 'event_title_changed';
export const EVENT_HOLDER_CHANGED = 'event_holder_changed';
export const EVENT_DESCRIPTION_CHANGED = 'event_description_changed';
export const START_MONTH_CHANGED = 'start_month_changed';
export const START_DATE_CHANGED = 'start_date_changed';
export const START_YEAR_CHANGED = 'start_year_changed';
export const END_MONTH_CHANGED = 'end_month_changed';
export const END_DATE_CHANGED = 'end_date_changed';
export const END_YEAR_CHANGED = 'end_year_changed';
export const EVENT_TYPE_CHANGED = 'event_type_changed';
export const EVENT_CREATE = 'event_create';
export const START_EVENT_HOUR_CHANGED = 'event_hour_changed';
export const START_EVENT_MINUTE_CHANGED = 'event_minute_changed';
export const START_EVENT_MERIDIEM_CHANGED = 'event_meridiem_changed';
export const END_EVENT_HOUR_CHANGED = 'end_event_hour_changed';
export const END_EVENT_MINUTE_CHANGED = 'end_event_minute_changed';
export const END_EVENT_MERIDIEM_CHANGED = 'end_event_meridiem_changed';
export const CLEAR_SEARCH_BAR = 'clear_search_bar';
export const EVENT_CREATE_FAILED = 'event_create_failed';
export const EVENT_FORM_INCOMPLETE = 'event_form_incomplete';
export const CLEAR_EVENT_INPUTS = 'clear_event_inputs';
export const LOAD_EVENT_LIST = 'load_event_list';

//for changing the text of the filter events search bar
export const SEARCH_EVENT_TITLE_CHANGED = 'search_event_title_changed';
export const SEARCHING_EVENTS = 'searching_events';

//for fetching data from firebase database for Events
export const FETCH_EVENTS = 'fetch_events';

//fetching the email list
export const FETCH_EMAILS = 'fetch_emails';

//logging out the user
export const LOG_OUT = 'log_out';
export const LOG_OUT_FAIL = 'log_out_fail';
export const LOAD_OUT = 'load_out';

//fetch the image for the billboardImage
export const FETCH_BILLBOARD = 'fetch_billboard';

//fetch the construction images for the gallery
export const FETCH_CONSTRUCTION_IMAGES = 'fetch_construction_images';
export const FETCH_FUNDRAISING_IMAGES = 'fetch_fundraising_images';
export const FETCH_SIKH_HERITAGE_IMAGES = 'fetch_sikh_heritage_images';
export const FETCH_CANADA_DAY_IMAGES = 'fetch_canada_day_images';
export const FETCH_SANGAT_IMAGES = 'fetch_sangat_images';

//checking if the images are loaded
export const LOAD_IMAGES = 'load_images';

//request a booking form types
export const BOOKING_EVENT_HOLDER_CHANGED = 'booking_event_holder_changed';
export const BOOKING_EMAIL_CHANGED = 'booking_email_changed';
export const BOOKING_PHONE_NUMBER_CHANGED = 'booking_phone_number_changed';
export const BOOKING_EVENT_TITLE_CHANGED = 'booking_event_title_changed';
export const BOOKING_START_EVENT_HOUR_CHANGED = 'booking_event_hour_changed';
export const BOOKING_START_EVENT_MINUTE_CHANGED =
  'booking_event_minute_changed';
export const BOOKING_START_EVENT_MERIDIEM_CHANGED =
  'booking_event_meridiem_changed';
export const BOOKING_END_EVENT_HOUR_CHANGED = 'booking_end_event_hour_changed';
export const BOOKING_END_EVENT_MINUTE_CHANGED =
  'booking_end_event_minute_changed';
export const BOOKING_END_EVENT_MERIDIEM_CHANGED =
  'booking_end_event_meridiem_changed';
export const BOOKING_EVENT_TYPE_CHANGED = 'booking_event_type_changed';
export const BOOKING_START_MONTH_CHANGED = 'booking_start_month_changed';
export const BOOKING_START_DATE_CHANGED = 'booking_start_date_changed';
export const BOOKING_START_YEAR_CHANGED = 'booking_start_year_changed';
export const BOOKING_END_MONTH_CHANGED = 'booking_end_month_changed';
export const BOOKING_END_DATE_CHANGED = 'booking_end_date_changed';
export const BOOKING_END_YEAR_CHANGED = 'booking_end_year_changed';
export const REQUEST_FORM_INCOMPLETE = 'request_form_incomplete';

//for clearing all inputs in a form
export const CLEAR_INPUTS = 'clear_inputs';

//for creating the request
export const LOAD_REQUEST = 'load_request';
export const REQUEST_CREATE = 'request_create';
export const REQUEST_CREATE_FAILED = 'request_create_failed';

//for fetching the list of event requests
export const FETCH_EVENT_REQUESTS = 'fetch_event_requests';

//for opening and closing the modal/popup
export const OPEN_CREATE_EVENT_MODAL = 'open_create_event_modal';
export const CLOSE_CREATE_EVENT_MODAL = 'close_create_event_modal';
