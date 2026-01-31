import { MovieSearchForm } from "./MovieSearchForm/MovieSearchForm";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieSearchList } from "./MovieSearchList/MovieSearchList";

const MovieSearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(
    !searchParams.get("query") ? "" : searchParams.get("query"),
  );

  return (
    <>
      <section>   
          <MovieSearchForm
            setQuery={setQuery}
            query={query}
            setSearchParams={setSearchParams}
          />
          <MovieSearchList />   
      </section>
    </>
  );
};

export default MovieSearchPage;