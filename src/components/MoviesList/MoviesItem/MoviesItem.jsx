import { Link, useLocation } from "react-router-dom";

export const MoviesItem = ({ id, title }) => {
  const location = useLocation();

  return (
    <li id={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <h3>{title}</h3>
      </Link>
    </li>
  );
};