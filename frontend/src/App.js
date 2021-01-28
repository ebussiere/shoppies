import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import MovieSearchScreen from './screens/MovieSearchScreen.js';
import MovieDetailsScreen from './screens/MovieDetailsScreen.js';
import SharedMovies from './screens/SharedMovies.js';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/:term?' component={MovieSearchScreen} exact/>
          <Route path='/details/:imdbID' component={MovieDetailsScreen}/>
          <Route path='/shared/' component={SharedMovies} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
