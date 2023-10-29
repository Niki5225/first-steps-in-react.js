import {useState} from "react";

function Timer(props){
    let [seconds, setSeconds] = useState(props.time);

    setTimeout(() => {
        setSeconds(seconds => seconds + 1);
    }, 1000);

    return (
        <div className={'timer'}>
            <h2>Timer</h2>
            <p>
                Time: {seconds}
            </p>
        </div>
    )
}

export default Timer;