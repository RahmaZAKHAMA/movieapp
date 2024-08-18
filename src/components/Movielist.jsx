import React from 'react'
import Moviecard from './Moviecard'
const Movielist = ({ movies, searchInput, ratingInput}) => {
  console.log(searchInput);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {movies
        .filter((movie) =>
          movie.title.toUpperCase().includes(searchInput.toUpperCase())&& movie.rate>=ratingInput
        )
        .map((movie, key) => (
          <Moviecard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default Movielist