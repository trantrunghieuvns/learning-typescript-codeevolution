import { useEffect, useState } from "react";
import { CounterTypes } from "./LessonThree";


const Counter = (props: CounterTypes) => {
    console.log('props', props)
    const [hount, setHount] = useState(props.count);

    useEffect(() => setHount(props.count), [props])
    // very gud to change value, state using useEffect 
    return (
        <>
            <div className="m-5">
                <button onClick={() => setHount(hount - props.minus)}>Decrement</button >
                <span className="btn btn-warning ">{hount}
                </span>
                <button onClick={() => setHount(hount + props.minus)}>
                    Increase
                </button>

            </div>
        </>
    )
}

export default Counter;