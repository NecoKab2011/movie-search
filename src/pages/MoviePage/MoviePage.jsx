import axios from "axios";
import { NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";

const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDg4NGQyODk0ZDRjMjhhNjI2OTM5NGJlNDI4MDVjNCIsIm5iZiI6MTc2OTYxMDcxMy4wNjQ5OTk4LCJzdWIiOiI2OTdhMWRkOTRjMzU2OTI4MTYyYjFkYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4lm_tD_6r3KyZ_ew6NVXrAPkmhXYxyyals6F6PAHZts",
  },
});

const MoviePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const backLinkHref = location.state?.from ?? "/movies";
  const [movie, setMovie] = useState(null);

  useEffect(() => {
  const getMovie = async () => {
    try {
      const { data } = await movieApi.get(`/movie/${id}`);
      setMovie(data);
    } catch (error) {
      console.error(error);
      navigate("/movies");
    }
  };

  getMovie();
}, [id, navigate]);

  if (!movie) return null;

  return (
    <section>
      <button onClick={() => navigate(backLinkHref)}>
        Go back
      </button>

      <div>
        <img
          src={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/w500" +
                movie.poster_path
              : "https://i.postimg.cc/1tMwNVhc/cinema.png"
          }
          alt={movie.title}
        />

        <div>
          <h1>{movie.title}</h1>
          <p>
            User score: {Math.round(movie.vote_average * 10)}%
          </p>

          <h2>Overview</h2>
          <p>{movie.overview}</p>

          <h2>Genres</h2>
          <ul>
            {movie.genres.map(({ name }) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>

      <ul>
        <li>
          <NavLink to="cast" state={{ from: backLinkHref }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MoviePage;
