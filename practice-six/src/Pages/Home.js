import Videos from "../Components/Videos";
import SearchBar from "../Components/SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import videos from "../videos.json"

const Home = () => {

  const [allVideos, setAllVideos] = useState(videos);
  const [filteredVideos, setFilteredVideos] = useState(videos);

  const handleSearchVideo = (result) => {
    setFilteredVideos(result);
  }

  return (
    <>
      <SearchBar allVideos={ allVideos } onSearchVideo={ handleSearchVideo } />
      <Videos videos={ filteredVideos } />
      <Link to="/video"></Link>
    </>
  );
}

export default Home;