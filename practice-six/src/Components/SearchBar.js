
const SearchVideoByTitle = (title, allVideos, onSearchVideo) => {

  const foundVideos = [];

  allVideos.forEach((video) => {

    title = title.toLowerCase();
    video.videoTitle = video.videoTitle.toLowerCase();

    if (video.videoTitle.includes(title)) {
      foundVideos.push(video);
    }
  });

  onSearchVideo(foundVideos);
}

const SearchBar = ( { allVideos, onSearchVideo } ) => {

  console.log(allVideos);

  return (
    <>
      <label htmlFor="search-bar">
        Search:<input className="h-8 w-64 border border-gray-400 rounded outline-gray-400 mt-3 mb-3 ml-1.5 pl-1.5"
        type="text" name="search-bar" id="search-bar" onChange={ (e) => SearchVideoByTitle(e.target.value, allVideos, onSearchVideo) } />
      </label>
    </>
  );
}

export default SearchBar;