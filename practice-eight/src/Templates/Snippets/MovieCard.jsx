

const MovieCard = ({ movies } ) => {
  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li className="mt-3 mb-3" key={movie.imdbID}>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl">{movie.Title}</h2>
              <img className="max-w-60 max-h-80 rounded" src={movie.Poster} alt={movie.Title}/>
              <p>{movie.Year}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieCard;