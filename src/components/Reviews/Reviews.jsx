import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewsItem } from "./ReviewsItem/ReviewsItem";

const reviewsApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDg4NGQyODk0ZDRjMjhhNjI2OTM5NGJlNDI4MDVjNCIsIm5iZiI6MTc2OTYxMDcxMy4wNjQ5OTk4LCJzdWIiOiI2OTdhMWRkOTRjMzU2OTI4MTYyYjFkYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4lm_tD_6r3KyZ_ew6NVXrAPkmhXYxyyals6F6PAHZts",
  },
});

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchReviews = async () => {
      try {
        const { data } = await reviewsApi.get(`/${id}/reviews`);
        if (isMounted) {
          setReviews(data.results);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (!reviews.length) return null;

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <ReviewsItem
          key={id}
          id={id}
          author={author}
          content={content}
        />
      ))}
    </ul>
  );
};

export default Reviews;
