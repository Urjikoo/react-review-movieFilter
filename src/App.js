import { useEffect, useState } from "react";
//
import Movie from "./Movie";
import Filter from "./filter";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState([]);
  useEffect(() => {
    fetchingApi();
  }, []);
  const fetchingApi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=40fa88db75bea3290bf4ad30803a2ecc"
    );
    const theMovies = await data.json();
    // console.log(theMovies);
    setPopular(theMovies.results);
    setFiltered(theMovies.results);
  };
  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div animate={{ y: 100 }} className="popmovies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </motion.div>
    </div>
  );
}

export default App;

//https://api.themoviedb.org/3/movie/550?api_key=40fa88db75bea3290bf4ad30803a2ecc
