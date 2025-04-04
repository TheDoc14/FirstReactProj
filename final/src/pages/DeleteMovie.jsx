import { useParams, useNavigate } from "react-router-dom";
import { useMovies } from "../context/MoviesContext";
import axios from "axios";

const DeleteMovie = () => {
  const { id } = useParams();
  const { movies, setMovies } = useMovies();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === id);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/movies/${id}`);
    setMovies(prev => prev.filter(m => m.id !== id));
    navigate("/");
  };

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div className="container">
      <header>
        <h1>Delete Movie</h1>
      </header>
      <div className="delete-movie">
        <h2>Are you sure you want to delete "{movie.title}"?</h2>
        <div className="buttons">
          <button className="btn btn-delete" onClick={handleDelete}>Yes, Delete</button>
          <button className="btn btn-back" onClick={() => navigate("/")}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteMovie;
