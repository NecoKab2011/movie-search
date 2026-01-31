import axios from "axios";
import { useEffect, useState } from "react";
import { MoviesItem } from "../../../components/MoviesList/MoviesItem/MoviesItem";
import { useSearchParams } from "react-router-dom";

const moviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/search",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDg4NGQyODk0ZDRjMjhhNjI2OTM5NGJlNDI4MDVjNCIsIm5iZiI6MTc2OTYxMDcxMy4wNjQ5OTk4LCJzdWIiOiI2OTdhMWRkOTRjMzU2OTI4MTYyYjFkYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4lm_tD_6r3KyZ_ew6NVXrAPkmhXYxyyals6F6PAHZts",
  },
});

export const MovieSearchList = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    let isMounted = true;

    const fetchMovies = async () => {
      try {
        const { data } = await moviesApi.get(
          `/movie?include_adult=false&page=1&query=${query}`
        );

        if (isMounted) {
          setMovies(data.results);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();

    return () => {
      isMounted = false;
    };
  }, [query]);

  if (!movies.length) return null;

  return (
    <ul>
      {movies.map(({ id, title, }) => (
        <MoviesItem
          key={id}
          id={id}
          title={title}
        />
      ))}
    </ul>
  );
};
