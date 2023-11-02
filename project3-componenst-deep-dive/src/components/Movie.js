import {useEffect} from "react";
import styles from '../css/Movie.module.css'

const Movie = ({id, title, year, plot, director, posterUrl, onClickDelete, onMovieSelect, selected}) => {
    useEffect(() => {
        console.log(`${title} mounted!`);

        return () => {
            console.log(`${title} unmounted!`);
        };

    }, [title]);

    useEffect(() => {
        console.log(`${title} updated!`);
    }, [title, selected]);
    return (
        <article className={styles['movie-article']}>
            <header>
                <h2>{title} - {year}</h2>
                {selected && <h4>Selected</h4>}
            </header>
            <main>
                <img src={posterUrl} alt={title}/>
                <p>{plot}</p>
            </main>
            <footer>
                <p>{director}</p>
            </footer>
            <button onClick={() => onClickDelete(id)}>Delete</button>
            <button onClick={() => onMovieSelect(id)}>Select</button>
        </article>
    )
}

export default Movie;