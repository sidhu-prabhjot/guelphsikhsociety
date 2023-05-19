import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import CommReducer from './CommReducer';
import EventReducer from './EventReducer';
import GalleryReducer from './GalleryReducer';
import BookingReducer from './BookingReducer';

export default combineReducers({
  auth: AuthReducer,
  comm: CommReducer,
  event: EventReducer,
  gallery: GalleryReducer,
  booking: BookingReducer,
});
