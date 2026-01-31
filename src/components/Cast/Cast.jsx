import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CastItem } from "./CastItem/CastItem";

const castApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDg4NGQyODk0ZDRjMjhhNjI2OTM5NGJlNDI4MDVjNCIsIm5iZiI6MTc2OTYxMDcxMy4wNjQ5OTk4LCJzdWIiOiI2OTdhMWRkOTRjMzU2OTI4MTYyYjFkYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4lm_tD_6r3KyZ_ew6NVXrAPkmhXYxyyals6F6PAHZts",
  },
});

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchCast = async () => {
      try {
        const { data } = await castApi.get(`/${id}/credits`);
        if (isMounted) {
          setCast(data.cast);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCast();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (!cast.length) return null;

  return (
    <ul>
      {cast.map(({ id, name, profile_path, character, gender }) => (
        <CastItem
          key={id}
          name={name}
          gender={gender}
          profile_path={profile_path}
          character={character}
        />
      ))}
    </ul>
  );
};

export default Cast;
