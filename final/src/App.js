import './App.css';
import { MoviesProvider } from './context/MoviesContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviesList from './pages/MoviesList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import DeleteMovie from './pages/DeleteMovie';

const App = () => {
  return (
    <MoviesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/new" element={<NewMovie />} />
          <Route path="/edit/:id" element={<EditMovie />} />
          <Route path="/delete/:id" element={<DeleteMovie />} />
        </Routes>
      </BrowserRouter>
    </MoviesProvider>
  );
};

export default App;
