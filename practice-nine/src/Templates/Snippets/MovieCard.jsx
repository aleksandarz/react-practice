

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-64">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
        alt={movie.Title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-gray-800 truncate">{movie.Title}</h2>
        <p className="text-sm text-gray-600">{movie.Year}</p>
        <button
          type="button"
          className="h-8 w-36 text-white rounded bg-cyan-400 hover:bg-cyan-600 transition-colors">See details</button>
      </div>
    </div>
  );
};

export default MovieCard;
