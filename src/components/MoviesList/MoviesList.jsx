import { MoviesItem } from "./MoviesItem/MoviesItem.jsx";

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <MoviesItem key={id} id={id} title={title} />
      ))}
    </ul>
  );
};