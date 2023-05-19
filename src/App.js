import React, {Component} from 'react';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    if (firebase.apps.length === 0) {
      const config = {
        apiKey: 'AIzaSyBbVu4KorF1zjpsXj3IqaYP8cIBWg5iEEE',
        authDomain: 'guelphsikhsocietyapp.firebaseapp.com',
        databaseURL: 'https://guelphsikhsocietyapp.firebaseio.com',
        projectId: 'guelphsikhsocietyapp',
        storageBucket: 'guelphsikhsocietyapp.appspot.com',
        messagingSenderId: '289240653691',
        appId: '1:289240653691:web:6ce6329cf7f33659b5e7de',
        measurementId: 'G-EDF6Y16SXL',
      };
      firebase.initializeApp(config);
    }
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
