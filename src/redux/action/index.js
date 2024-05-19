export const GET_MUSIC = "GET_MUSIC";
export const PLAY_MUSIC = "PLAY_MUSIC";
export const ADD_FAV = "ADD_FAV";
export const DELETE_FAV = "DELETE_FAV";

export const searchMusic = (query) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (response.ok) {
        let { data } = await response.json();
        dispatch({
          type: GET_MUSIC,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const playMusic = (selectedAlbum) => {
  return {
    type: PLAY_MUSIC,
    payload: selectedAlbum,
  };
};

export const addFav = (selectedSong) => {
  return {
    type: ADD_FAV,
    payload: selectedSong,
  };
};

export const deleteFav = (deletedSong) => {
  return {
    type: DELETE_FAV,
    payload: deletedSong,
  };
};
