function Movie(props){
    console.log(props.movie);
    return (
        <article>
            <h2>{props.movie.title}</h2>
            <p>{props.movie.description}</p>
            <p>{props.movie.actors}</p>
        </article>
    )
}

export default Movie;