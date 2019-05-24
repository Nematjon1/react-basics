import React from "react";
import { connect } from "react-redux";

import MobieBox from "./MovieBox";
import LoadingIndicator from "./LoadingIndicator";

const MovieList = ({movies, date}) => {
  const movieBoxes = movies.map(movie => {
    <li key={movie.title}>
      <MovieBox movie={movie} />
    </li>
  });

  return (
    <div className="w5 pr3">
      <h2>{date}</h2>
      <LoadingIndicator>
        <ol className="list ma0">
          {movieBoxes}
        </ol>
      </LoadingIndicator>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  if(state.filter) {
    const activeMovies = state.movies.filter(movie => {
      return state.favourites.includes(movie.title);
    })

    return {
      movies: activeMovies.filter(movie => movie.date === ownProps.date)
    };
  } else {
    return {
      movies: state.movies.filter(movie => movie.date === ownProps.date)
    };  
  }
};

export default connect(mapStateToProps)(MovieList);

