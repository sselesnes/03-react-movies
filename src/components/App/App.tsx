import styles from "./App.module.css";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../tmdb/tmdb-api";
import MovieGrid from "../MovieGrid/MovieGrid";
import toast, { Toaster } from "react-hot-toast";
import type { Movie } from "../../types/movie";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const fetchResult = await fetchMovies({ query });
      setMovies(fetchResult.results);
    } catch (err) {
      toast.error(`${err}`);
      setMovies([]);
    }
  };

  const handleMovieSelect = (movie: Movie) => {
    console.log(movie.title, "card clicked");
  };

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid movies={movies} onSelect={handleMovieSelect} />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#F00",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}
