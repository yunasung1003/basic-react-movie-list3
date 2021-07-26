// import { render } from "react-dom";
import "./styles.css";
import Movie from "./components/Movie";
import { useState } from "react";
import MovieForm from "./components/MovieForm";

export default function App() {
  const [movies, setMovies] = useState([
    { title: "hello world1", year: 2001 },
    { title: "hello world2", year: 2002 },
    { title: "hello world3", year: 2003 },
    { title: "hello world4", year: 2004 }
  ]);

  const renderMovies = movies.map((movie) => {
    return (
      <div>
        <Movie movie={movie} key={movie.title} />
      </div>
    );
  });

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  );
}
