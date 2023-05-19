import {
  FETCH_CONSTRUCTION_IMAGES,
  FETCH_FUNDRAISING_IMAGES,
  FETCH_SIKH_HERITAGE_IMAGES,
  FETCH_CANADA_DAY_IMAGES,
  FETCH_SANGAT_IMAGES,
  LOAD_IMAGES,
} from '../actions/types';

const INITIAL_STATE = {
  constructionImagesObject: {},
  fundraisingImagesObject: {},
  sikhHeritageImagesObject: {},
  canadaDayImagesObject: {},
  sangatImagesObject: {},
  loadingImages: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_IMAGES:
      return {...state, loadingImages: true};
    case FETCH_CONSTRUCTION_IMAGES:
      return {
        ...state,
        constructionImagesObject: action.payload,
        loadingImages: false,
      };
    case FETCH_FUNDRAISING_IMAGES:
      return {
        ...state,
        fundraisingImagesObject: action.payload,
        loadingImages: false,
      };
    case FETCH_SIKH_HERITAGE_IMAGES:
      return {
        ...state,
        sikhHeritageImagesObject: action.payload,
        loadingImages: false,
      };
    case FETCH_CANADA_DAY_IMAGES:
      return {
        ...state,
        canadaDayImagesObject: action.payload,
        loadingImages: false,
      };
    case FETCH_SANGAT_IMAGES:
      return {
        ...state,
        sangatImagesObject: action.payload,
        loadingImages: false,
      };
    default:
      return state;
  }
};
