import { useNavigate } from "react-router-dom";
import { useMovies } from "../context/MoviesContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const NewMovie = () => {
  const navigate = useNavigate();
  const { setMovies } = useMovies();

  const formik = useFormik({
    initialValues: { 
      title: "", 
      director: "", 
      release_year: "", 
      rating: "", 
      image: "" 
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      director: Yup.string().required("Director is required"),
      release_year: Yup.number()
        .required("Year is required")
        .min(1888, "Year must be valid")
        .max(new Date().getFullYear(), "Year must be in the past"),
      rating: Yup.number()
        .required("Rating is required")
        .min(0, "Rating must be at least 0")
        .max(10, "Rating cannot exceed 10"),
      image: Yup.string().url("Image must be a valid URL")
    }),
    onSubmit: async (values) => {
      const response = await axios.post("http://localhost:5000/movies", values);
      setMovies(prev => [...prev, response.data]);
      navigate("/");
    },
  });

  return (
    <div className="container">
      <header>
        <h1>Add New Movie</h1>
      </header>
      <form onSubmit={formik.handleSubmit} className="movie-form">
        <input 
          type="text" 
          name="title" 
          placeholder="Title" 
          onChange={formik.handleChange} 
          value={formik.values.title} 
        />
        {formik.touched.title && formik.errors.title && <div className="error">{formik.errors.title}</div>}
        
        <input 
          type="text" 
          name="director" 
          placeholder="Director" 
          onChange={formik.handleChange} 
          value={formik.values.director} 
        />
        {formik.touched.director && formik.errors.director && <div className="error">{formik.errors.director}</div>}
        
        <input 
          type="number" 
          name="release_year" 
          placeholder="Year" 
          onChange={formik.handleChange} 
          value={formik.values.release_year} 
        />
        {formik.touched.release_year && formik.errors.release_year && <div className="error">{formik.errors.release_year}</div>}
        
        <input 
          type="number" 
          name="rating" 
          placeholder="Rating" 
          onChange={formik.handleChange} 
          value={formik.values.rating} 
        />
        {formik.touched.rating && formik.errors.rating && <div className="error">{formik.errors.rating}</div>}
        
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          onChange={formik.handleChange} 
          value={formik.values.image} 
        />
        {formik.touched.image && formik.errors.image && <div className="error">{formik.errors.image}</div>}
        
        <button type="submit" className="btn">Save</button>
      </form>
    </div>
  );
};

export default NewMovie;
