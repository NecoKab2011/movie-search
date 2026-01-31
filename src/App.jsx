import { Route, Routes } from "react-router-dom";
import { Connect } from "./components/Connect/Connect.jsx";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MovieSearchPage = lazy(() => import("./pages/MovieSearchPage/MovieSearchPage"));
const MoviePage = lazy(() => import("./pages/MoviePage/MoviePage"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"),);


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Connect />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MovieSearchPage />} />
           <Route path="/movies/:id" element={<MoviePage />}>
           <Route path="cast" element={<Cast />} />
           <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
