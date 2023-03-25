import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import data from "./data/sample.json";
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


  return (
    <Routes>
      <Route path="/" element={<HomeScreen data={data}/>} />
      <Route path="entries">
        <Route path="movies" element={<EntriesScreen type={'movies'} entries={movies} />} />
        <Route path="series" element={<EntriesScreen type={'series'} entries={series} />} />
      </Route>
    </Routes>
  );
}

export default App;
