import axios from "axios";
import type { Movie } from "../../types/movie";

interface fetchProps {
  query: string;
}

interface fetchResult {
  results: Movie[];
}

export async function fetchMovies({ query }: fetchProps): Promise<fetchResult> {
  const response = await axios.get<fetchResult>("https://api.themoviedb.org/3/search/movie", {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });
  return response.data;
}
