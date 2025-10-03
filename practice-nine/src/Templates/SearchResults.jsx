import MovieCard from "./Snippets/MovieCard";
import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";

const SearchResults = () => {
  const { movies } = useContext(MovieContext);
  console.log("Movies iz context-a:", movies);

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center align-center m-10">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default SearchResults;