import MovieList from "./components/MovieList";
import {useEffect, useState} from "react";

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/movies.json')
            .then(res => res.json())
            .then(moviesData => setMovies(moviesData.movies));
    }, []);

    function onClickDelete(id) {
        setMovies(oldMovies => oldMovies.filter(x => x.id !== id));
    }

    function onMovieSelect(id) {
        setMovies(oldMovies =>
            oldMovies.map(x => ({...x, selected: x.id === id}))
        );
    }

    return (
        <div className="App">
            <h2>Movie List</h2>
            <MovieList movies={movies} onClickDelete={onClickDelete} onMovieSelect={onMovieSelect}></MovieList>
        </div>
    );
}

export default App;
