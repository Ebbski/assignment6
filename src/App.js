import './App.css';
import { useState } from "react";
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import OrderButtons from './components/OrderButtons';


export default function App() {
  
  const [movies, setMovies] = useState([]);

  const addMovie = (title, grade) => {
    const newMovie = { 
      title,
      grade,
    };
    setMovies([...movies, newMovie]);
  };

  const deleteMovie = (title) => {
    setMovies(movies.filter((movie) => movie.title !== title));
  };

  const handleSort = (typeOfBtn) => {
    const sortedMovies = [...movies].sort((a, b) => {
      if(typeOfBtn === "title"){
        return a.title.localeCompare(b.title);
      } else if (typeOfBtn === "grade"){
        return b.grade - a.grade;
      }
      return 0;
    });

    setMovies(sortedMovies);
  };
  
  return (
    <div className="App">
      <h1>Min filmlista</h1>
      <legend>Lägg till en film</legend>
      <hr />
      <MovieForm onAddMovie={addMovie} />
      <hr />
      <h2>Filmer</h2>
      <OrderButtons handleSorting={handleSort} />
      <MovieList movies={movies} onDelete={deleteMovie} />
    </div>
  );
}
