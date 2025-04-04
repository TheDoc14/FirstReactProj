import { useParams, useNavigate } from "react-router-dom";
import { useMovies } from "../context/MoviesContext";

const MovieDetails = () => {
  const { movies } = useMovies();
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === id);

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div className="container">
      <header>
        <h1>Movie Details</h1>
      </header>
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <h3>Director: {movie.director}</h3>
        <h3>Year: {movie.release_year}</h3>
        <h3>Rating: {movie.rating}</h3>
        {movie.image && <img src={movie.image} alt={movie.title} />}
        <div className="button-group">
          <button className="btn btn-back" onClick={() => navigate(-1)}>Back</button>
          <button className="btn btn-edit" onClick={() => navigate(`/edit/${movie.id}`)}>Edit</button>
          <button className="btn btn-delete" onClick={() => navigate(`/delete/${movie.id}`)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
