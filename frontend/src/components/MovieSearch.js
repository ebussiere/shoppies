import { Form, Button } from 'react-bootstrap';
import React, { useEffect, useState} from 'react';
import { useDispatch,useSelector} from "react-redux";
import {listMovies } from '../actions/movieActions.js'
const MovieSearch = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const movieList = useSelector(state => state.movieList)
  const { term } = movieList;
  const dispatch = useDispatch()

  useEffect(() => {
    if (term) {
      setSearchValue(term)
    }
  },[])

  useEffect(() => {
    dispatch(listMovies(searchValue))
    }, [dispatch,searchValue])
  
  return (
    <div>
      <h1>Movie Search</h1>
      <Form>
        <Form.Group controlId="formBasic">
          <Form.Control name="search" type="text"
            placeholder="Enter search" onChange={(e) => setSearchValue(e.target.value)}
            value={term||'' }/>
        </Form.Group>
      </Form>
    </div>
  );
};

export default MovieSearch;
