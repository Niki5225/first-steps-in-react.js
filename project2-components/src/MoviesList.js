import Movie from "./Movie";

function MoviesList(props) {
    return (
        <div className={'list-items'}>
            <Movie movie={props.movies[0]}/>

            <Movie movie={props.movies[1]}/>

            <Movie movie={props.movies[2]}/>
        </div>
    );
}

export default MoviesList;