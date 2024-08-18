import { useState } from "react";
import "./App.css";

import { moviesData } from "./moviesData";
import Movielist from "./components/Movielist";
import MovieAdd from "./components/MovieAdd";
import FilterByTitle from "./components/FilterByTitle";
import FilterRating from "./components/Rating";
function App() {
  const [movie, setmovie] = useState(moviesData);
  const [searchInput, setSearchInput] = useState("");
  const [ratingInput, setratingInput] = useState(1);
  const addMovie = (newMovie) => {
    setmovie([...movie, newMovie]);
  };
  //console.log(searchInput);
  return (
    <div className="App">
      <FilterRating
        ratingInput={ratingInput}
        setratingInput={setratingInput}
        isRating={false}
      />
      <FilterByTitle
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      <MovieAdd add={addMovie} />
      <Movielist
        movies={movie}
        searchInput={searchInput}
        ratingInput={ratingInput}
      />
    </div>
  );
}

export default App;
