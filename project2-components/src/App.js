import MoviesList from "./MoviesList";
import Timer from "./Timer";
import Counter from "./Counter";

function App() {
    const movies = [
        {title: 'Iron Man', actors: ['Some people'], description: 'Lorem ipsum dolor'},
        {title: 'Iron Man 2', actors: ['Some people'], description: 'Lorem ipsum dolor'},
        {title: 'Iron Man 3', actors: ['Some people'], description: 'Lorem ipsum dolor'},
    ];

    const killCounter = ['First one', 'Double kill', 'Triple Kill', 'Unstoppable', 'Godlike'];
    return (
        <div className="App">
            <MoviesList movies={movies}/>
            <hr/>
            <Timer time={5}/>
            <hr/>
            <Counter kills={killCounter}/>
        </div>
    );
}

export default App;
