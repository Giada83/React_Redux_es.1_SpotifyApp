import { PLAY_MUSIC } from "../action";

const State = {
  album_selected: null,
};

const playerReducer = function (state = State, action) {
  switch (action.type) {
    case PLAY_MUSIC:
      return {
        ...state,
        album_selected: action.payload,
      };

    default:
      return state;
  }
};

export default playerReducer;
