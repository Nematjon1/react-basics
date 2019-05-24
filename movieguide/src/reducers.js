import { combineReducers } from "redux";

import {
  FILTER_CHANGED,
  MOVIES_LOADED,
  FAVOURITED,
  UNFAVOURITED
} from "./actions";

export const movies = (state = [], action) => {
  switch(action.type) {
    case MOVIES_LOADED:
      return action.movies;
    default:
      return state;
  }
};

export const loading = (state = true, action) => {
  switch(action.type) {
    case MOVIES_LOADED:
      return false;
    default:
      return state;
  }
};

export const filter = (state = false, action) => {
  switch(action.type) {
    case FILTER_CHANGED:
      return action.filter;
    default:
      return state;
  }
};

export const favourites = (state = [], action) => {
  switch(action.type) {
    case FAVOURITED:
      return [...state, action.movieId];
    case UNFAVOURITED:
      return state.filter(id => id !== action.movieId);
    default:
      return state;
  }
};

export default combineReducers({ movies, filter, favourites, loading });

