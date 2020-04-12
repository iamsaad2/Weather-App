import { SEARCH_WEATHER, CLEAR_WEATHER } from './types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_WEATHER:
      return {
        ...state,
        weather: action.payload,
        weather2: action.payload2,
      };

    case CLEAR_WEATHER:
      return {
        ...state,
        weather2: {},
        weather: {},
      };
    default:
      return state;
  }
};
