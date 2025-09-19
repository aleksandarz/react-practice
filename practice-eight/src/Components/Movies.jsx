import axios from "axios";
import { useState } from "react";
import MovieCard from "../Templates/Snippets/MovieCard";

const Movies = () => {

  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
  const URL = process.env.REACT_APP_OMDB_API_URL;

  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);

  const getVideoSearchResults = (url, apiKey, searchInput) => {
    axios.get(url + "?apikey=" + apiKey + "&s=" + searchInput)
      .then((response) => {
        console.log(response);
        setMovies(response.data.Search || []);
      })
      .catch((error) => {
        console.log("Error fetching data: " + error);
      });

    setSearchInput("");
  }

  return (
    <>
      <div className="flex flex-col gap-10 m-3">
        <form onSubmit={(e) => e.preventDefault()} action="">
          <input type="text" className="w-64 h-8 rounded border border-gray-400 pl-1.5 outline-gray-400"
                 onChange={(e) => setSearchInput(e.currentTarget.value)} value={searchInput}
                 name="search-input" id="search-input" placeholder="Search by name"/>
          <button type="button"
                  className="ml-3 h-8 w-32 text-white rounded bg-orange-400 hover:bg-orange-600 transition duration-400 ease-in-out"
                  onClick={() => getVideoSearchResults(URL, API_KEY, searchInput)}>Search
          </button>
        </form>
        <MovieCard movies={movies}/>
      </div>
    </>
  );
}

export default Movies;