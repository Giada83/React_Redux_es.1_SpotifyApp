import { ADD_FAV } from "../action";
import { DELETE_FAV } from "../action";

const initialState = {
  library: [],
};

const favReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        library: state.library.concat(action.payload),
      };

    case DELETE_FAV:
      return {
        ...state,
        library: state.library.filter((fav, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default favReducer;
