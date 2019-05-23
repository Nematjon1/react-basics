import React from "react";
import ReactDOM from "react-dom";
import{ Provider } from "react-redux";

import store from "./store";
import { requestMovies } from "./movieApp";
import { MOVIES_LOADED } from "./actions";
import MovieList from "./MovieList";
import Filter from "./Filter";

requestMovies()
  .then(movies => store.dispatch({
    type: MOVIES_LOADED,
    movies
  }));

const movieLists = ["Monday", "Tuesday"].map(date => (
  <MovieList key={date} date={date} />
));

ReactDOM.render(
  <Provider store={store}>
    <main className="ph6 pv4">
      <h1 className="mt0">Programme</h1>
      <Filter name="filter" id="filter" label="Just favourites" />
      <div className="flex flex-row">
        {movieLists}
      </div>
    </main>
  </Provider>,
  document.getElementById("app")
)

