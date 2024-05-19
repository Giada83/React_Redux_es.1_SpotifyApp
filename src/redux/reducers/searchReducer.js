import { GET_MUSIC } from "../action";

const initialState = {
  music: [],
};

const searchReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_MUSIC:
      return {
        ...state,
        music: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
