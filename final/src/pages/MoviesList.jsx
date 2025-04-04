import { useMovies } from "../context/MoviesContext";
import { Link } from "react-router-dom";

const MoviesList = () => {
  const { movies, loading, error } = useMovies();

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <div className="container">
      <header>
        <h1>Movies List</h1>
      </header>
      <div className="button-group" style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link to="/new" className="btn">Add New Movie</Link>
      </div>
      <div className="movies-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            {movie.image && (
              <img src={movie.image} alt={movie.title} className="card-thumbnail" />
            )}
            <Link to={`/movie/${movie.id}`}>
              <h2>{movie.title}</h2>
            </Link>
            <h3>Rating: {movie.rating}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
