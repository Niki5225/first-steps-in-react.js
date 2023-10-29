import {useState} from "react";

function Counter(props) {
    let [counter, setCounter] = useState(0);

    function incrementHandler() {
        setCounter(counter => counter + 1);
    }

    function decrementHandler() {
        setCounter(counter => counter - 1);
    }

    function restartCounterHandler() {
        setCounter(0);
    }

    let title = '';
    switch (counter) {
        case 1:
            title = props.kills[0];
            break;
        case 2:
            title = props.kills[2];
            break;
        case 3:
            title = props.kills[3];
            break;
        case 4:
            title = props.kills[4];
            break;
        default:
            title = 'Kills';
    }

    return (
        <div className={'counter'}>
            <h2>{counter > 4 ? 'Godlike' : title}: {counter}</h2>
            {counter === 0 ? null :
                <button onClick={decrementHandler}>-</button>}
            <button onClick={restartCounterHandler}>0</button>
            {counter >= 7 ? null :
                <button onClick={incrementHandler}>+</button>}
        </div>
    )
}

export default Counter;