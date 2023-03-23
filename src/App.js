import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import HomeLayout from "./screens/HomeLayout";
import data from "./data/sample.json";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import EntriesScreen from "./screens/EntriesScreen";

function App() {
  //Filter metodu ile dizi ve filmler ayrı dizilere atandı.
  const movies = data.entries.filter((movie) => {
    return movie.programType === "movie";
  });
  const series = data.entries.filter((movie) => {
    return movie.programType === "series";
  });

  useEffect(() => {
    // console.log(movies);
    // console.log(series);
  });

  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="entries">
        <Route path="movies" element={<EntriesScreen entries={movies} />} />
        <Route path="series" element={<EntriesScreen entries={series} />} />
      </Route>
    </Routes>
  );
}

export default App;
