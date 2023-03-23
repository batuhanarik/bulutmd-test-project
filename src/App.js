import "./App.css";
import Homescreen from "./screens/Homescreen";
import data from "./data/sample.json";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  //Filter metodu ile dizi ve filmler ayrı dizilere atandı.
  const movies = data.entries.filter((movie) => {
    return movie.programType === "movie";
  });
  const series = data.entries.filter((movie) => {
    return movie.programType === "series";
  });

  useEffect(() => {
    console.log(movies);
    console.log(series);
  });

  return (
    <Routes>
      <Route path="/" element={<Homescreen />} />
      <Route path="entries">
        <Route path="movies" element={<Homescreen />} />
        <Route path="series" element={<Homescreen />} />
      </Route>
    </Routes>
  );
}

export default App;
