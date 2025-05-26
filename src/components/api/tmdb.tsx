// tmdb-api.ts
import axios from "axios";
import type { Movie } from "../../types/movie";

interface fetchProps {
  query: string;
  page?: number;
}

interface fetchResult {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function fetchMovies({ query, page = 1 }: fetchProps): Promise<fetchResult> {
  const response = await axios.get<fetchResult>("https://api.themoviedb.org/3/search/movie", {
    params: {
      query,
      page,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });
  return response.data;
}
