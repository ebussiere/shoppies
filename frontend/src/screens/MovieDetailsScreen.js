import React, { useEffect } from 'react';
import MovieDetails from '../components/MovieDetails.js';
import { useDispatch,useSelector} from "react-redux";
import { listMovieDetails } from '../actions/movieActions.js'

const MovieDetailsScreen = ({match}) => {
  const dispatch = useDispatch()
  const movieDetails = useSelector(state => state.movie)
  const { loading, error, movie } = movieDetails;
  
  useEffect(() => {
    dispatch(listMovieDetails(match.params.imdbID))
  }, [dispatch,match])
  return (
    <div>
      <MovieDetails
        key={movie.imdbID}
        title={movie.Title}
        poster={movie.Poster}
        runtime={movie.Runtime}
        released={movie.Released}
        genre={movie.Genre}
        director={movie.Director}
        writer={movie.Writer}
        actors={movie.Actors}
        plot={movie.Plot}
        awards={movie.Awards}
        ratings={movie.Ratings}
        boxOffice={movie.BoxOffice}
        production={movie.Production}
        
      />
    </div>
  );
};
export default MovieDetailsScreen;
