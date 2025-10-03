import { useContext, useState } from "react";
import axios from "axios";
import { MovieContext } from "../Context/MovieContext";

const Search = () => {

  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
  const URL = process.env.REACT_APP_OMDB_API_URL;

  const [searchText, setSearchText] = useState("");
  const { movies, setMovies } = useContext(MovieContext);
  // const [movies, setMovies] = useState([]);

  const getVideoSearchResults = (url, apiKey, searchText) => {
    console.log("URL:", url);
    console.log("API_KEY:", apiKey);
    console.log("SearchText:", searchText);

    axios.get(url + "?apikey=" + apiKey + "&s=" + searchText)
      .then((response) => {
        console.log(response);
        setMovies(response.data.Search || []);
      })
      .catch((error) => {
        console.log("Error fetching data: " + error);
      });

    setSearchText("");
  };

  return (
    <>
      <div className="flex gap-3 ml-3 mt-3">
        <label className="input">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" onChange={ (e) => setSearchText(e.target.value) } required placeholder="Search"/>
        </label>
        <button type="button" onClick={ () => getVideoSearchResults(URL, API_KEY, searchText) } className="h-10 w-44 text-white rounded bg-cyan-400 hover:bg-cyan-600">Search
        </button>
      </div>
    </>
  );
}

export default Search;