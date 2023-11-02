import Movie from "./Movie";

const MovieList = ({movies, onClickDelete, onMovieSelect}) => {
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Movie {...movie} onClickDelete={onClickDelete} onMovieSelect={onMovieSelect}/>
                </li>
            ))}
        </ul>
    )
}

export default MovieList;