import axios from "axios";
import { useState } from "react";

function App() {

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
      <form onSubmit={(e) => e.preventDefault()} action="">
        <input type="text" onChange={(e) => setSearchInput(e.currentTarget.value)} value={ searchInput }
               name="search-input" id="search-input" placeholder="Search by name"/>
        <button type="button" onClick={() => getVideoSearchResults(URL, API_KEY, searchInput)}>Search</button>
      </form>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title} ({movie.Year})
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
