import firebase from 'firebase';

import {
  FETCH_CONSTRUCTION_IMAGES,
  FETCH_FUNDRAISING_IMAGES,
  FETCH_SIKH_HERITAGE_IMAGES,
  FETCH_CANADA_DAY_IMAGES,
  FETCH_SANGAT_IMAGES,
  LOAD_IMAGES,
} from './types';

export const fetchConstructionImages = () => {
  return dispatch => {
    dispatch({type: LOAD_IMAGES});

    firebase
      .database()
      .ref('/GalleryConstruction')
      /*The code below says that whenver there is data that comes from the referenced path, and into the value, then
      call the arrow function with an object ot describe the data (which is snapshot)*/
      //the snapshot object is not the array of data, but can be used to get a handle on the data
      //the good thing about this firebase fetch method is, once it is run once, each time the database is updated, it will automatically re-run
      .on('value', snapshot => {
        //snapshot.val() is the actual way to get access to the data
        dispatch({type: FETCH_CONSTRUCTION_IMAGES, payload: snapshot.val()});
      });
  };
};

export const fetchFundraisingImages = () => {
  return dispatch => {
    dispatch({type: LOAD_IMAGES});

    firebase
      .database()
      .ref('/GalleryFundraising')
      /*The code below says that whenver there is data that comes from the referenced path, and into the value, then
      call the arrow function with an object ot describe the data (which is snapshot)*/
      //the snapshot object is not the array of data, but can be used to get a handle on the data
      //the good thing about this firebase fetch method is, once it is run once, each time the database is updated, it will automatically re-run
      .on('value', snapshot => {
        //snapshot.val() is the actual way to get access to the data
        dispatch({type: FETCH_FUNDRAISING_IMAGES, payload: snapshot.val()});
      });
  };
};

export const fetchSikhHeritageImages = () => {
  return dispatch => {
    dispatch({type: LOAD_IMAGES});

    firebase
      .database()
      .ref('/GallerySikhHeritageMonth')
      /*The code below says that whenver there is data that comes from the referenced path, and into the value, then
      call the arrow function with an object ot describe the data (which is snapshot)*/
      //the snapshot object is not the array of data, but can be used to get a handle on the data
      //the good thing about this firebase fetch method is, once it is run once, each time the database is updated, it will automatically re-run
      .on('value', snapshot => {
        //snapshot.val() is the actual way to get access to the data
        dispatch({type: FETCH_SIKH_HERITAGE_IMAGES, payload: snapshot.val()});
      });
  };
};

export const fetchCanadaDayImages = () => {
  return dispatch => {
    dispatch({type: LOAD_IMAGES});

    firebase
      .database()
      .ref('/GalleryCanadaDay')
      /*The code below says that whenver there is data that comes from the referenced path, and into the value, then
      call the arrow function with an object ot describe the data (which is snapshot)*/
      //the snapshot object is not the array of data, but can be used to get a handle on the data
      //the good thing about this firebase fetch method is, once it is run once, each time the database is updated, it will automatically re-run
      .on('value', snapshot => {
        //snapshot.val() is the actual way to get access to the data
        dispatch({type: FETCH_CANADA_DAY_IMAGES, payload: snapshot.val()});
      });
  };
};

export const fetchSangatImages = () => {
  return dispatch => {
    dispatch({type: LOAD_IMAGES});

    firebase
      .database()
      .ref('/GallerySangatContribution')
      /*The code below says that whenver there is data that comes from the referenced path, and into the value, then
      call the arrow function with an object ot describe the data (which is snapshot)*/
      //the snapshot object is not the array of data, but can be used to get a handle on the data
      //the good thing about this firebase fetch method is, once it is run once, each time the database is updated, it will automatically re-run
      .on('value', snapshot => {
        //snapshot.val() is the actual way to get access to the data
        dispatch({type: FETCH_SANGAT_IMAGES, payload: snapshot.val()});
      });
  };
};
