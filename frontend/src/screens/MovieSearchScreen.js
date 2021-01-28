import React from 'react';
import MovieCard from '../components/MovieCard.js';
import { useSelector} from "react-redux";
import MovieSearch from '../components/MovieSearch.js';
import { Col, Row } from 'react-bootstrap';
import LoginButton from '../components/LoginButton.js';
import LogoutButton from '../components/LogoutButton.js';
import Profile from '../components/Profile.js';

const MovieSearchScreen = (props) => {
  const movieList = useSelector(state => state.movieList)
  const { loading, error, movies, term } = movieList;
  return (
    <div>
      {/* <LoginButton />
      <LogoutButton />
      <Profile/> */}
      <MovieSearch />
      <Row>
        <Col style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {movies && movies.length > 0 ? movies.map((movie,idx) => (
            <MovieCard key={idx}
              id={movie.imdbID}
              Title={movie.Title}
              Poster={movie.Poster}
              Year={movie.Year}
              imdbID={movie.imdbID}
              term={ term}
            ></MovieCard>
          )) : <h1>No movies found</h1>}
        </Col>
      </Row>
    </div>
  );
};

export default MovieSearchScreen;
