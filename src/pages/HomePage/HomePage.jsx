import axios from "axios";
import { useEffect, useState } from "react";
import { MoviesList } from "../../components/MoviesList/MoviesList.jsx";

const trendApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/trending/movie",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDg4NGQyODk0ZDRjMjhhNjI2OTM5NGJlNDI4MDVjNCIsIm5iZiI6MTc2OTYxMDcxMy4wNjQ5OTk4LCJzdWIiOiI2OTdhMWRkOTRjMzU2OTI4MTYyYjFkYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4lm_tD_6r3KyZ_ew6NVXrAPkmhXYxyyals6F6PAHZts",
  },
});

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await trendApi.get("/week?language=en-US");
        setMovies(data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    getMovies();
  }, []);

  return (
    <section>
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
    </section>
  );
};

export default HomePage;