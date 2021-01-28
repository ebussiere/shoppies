import axios from 'axios';

import { MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS, MOVIE_LIST_FAIL, MOVIE_DETAILS_REQUEST, MOVIE_DETAILS_SUCCESS, MOVIE_DETAILS_FAIL } from '../constants/constants';

export const listMovies = (term,page=1) => async (dispatch) => {

  try {
    dispatch({ type: MOVIE_LIST_REQUEST });
    const { data } = await axios.get(`http://www.omdbapi.com/?s=${term}&page=${page}&apikey=e8a14901`);
    //const { data } = await axios.get(`http://www.omdbapi.com/?s=${search}&page=1&apikey=e8a14901`);
    dispatch({
      type: MOVIE_LIST_SUCCESS,
      payload: {
        res: data.Search,
        term:term
      }
    });

  } catch (error) {
    dispatch({
      type: MOVIE_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }


};
export const listMovieDetails = (imdbID) => async (dispatch) => {
 try {
    dispatch({ type: MOVIE_DETAILS_REQUEST });
    const { data } = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=e8a14901`);
    dispatch({
      type: MOVIE_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};