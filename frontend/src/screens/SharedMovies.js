import React from 'react';

const SharedMovies = ({ match }) => {
  return (
    <div>
      <h1>{match.params.movies}</h1>
    </div>
  );
};

export default SharedMovies;
