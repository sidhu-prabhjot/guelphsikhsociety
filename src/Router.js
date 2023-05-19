import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import MainScreen from './components/MainScreen';
import GutkaScreen from './components/GutkaScreen';
import CommSuggestions from './components/CommSuggestions';
import CreateSuggestion from './components/CreateSuggestion';
import EventScreen from './components/EventScreen';
import CreateEvent from './components/CreateEvent';
import ContactInfo from './components/ContactInfo';
import AboutTheApp from './components/AboutTheApp';
import EventDescription from './components/EventDescription';
import Gallery from './components/Gallery';
import ImageView from './components/ImageView';
import RequestBooking from './components/RequestBooking';
import BookingList from './components/BookingList';
import RequestInfoScreen from './components/RequestInfoScreen';
import NitnemGutkas from './components/NitnemGutkas';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} initial hideNavBar />
          <Scene key="SignUp" component={SignUpForm} hideNavBar />
        </Scene>
        <Scene key="accessed">
          <Scene key="mainScreen" component={MainScreen} hideNavBar initial />
          <Scene key="gutkaScreen" component={GutkaScreen} hideNavBar />
          <Scene key="contactInfo" component={ContactInfo} hideNavBar />
          <Scene key="about" component={AboutTheApp} hideNavBar />
          <Scene key="gallery" component={Gallery} hideNavBar />
          <Scene key="imageView" component={ImageView} hideNavBar />
          <Scene key="community" component={CommSuggestions} hideNavBar />
          <Scene
            key="createSuggestion"
            component={CreateSuggestion}
            hideNavBar
          />
          <Scene key="requestBooking" component={RequestBooking} hideNavBar />
          <Scene key="bookingList" component={BookingList} hideNavBar />
          <Scene key="requestInfo" component={RequestInfoScreen} hideNavBar />
          <Scene key="nitnemGutkas" component={NitnemGutkas} hideNavBar />
        </Scene>
        <Scene key="events">
          <Scene key="calender" component={EventScreen} initial hideNavBar />
          <Scene key="createEvent" component={CreateEvent} hideNavBar />
          <Scene
            key="eventDescription"
            component={EventDescription}
            hideNavBar
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
