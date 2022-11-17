import { useState } from "react";
import { CounterTypes } from "./LessonThree";

export type CounterProps = {
    counter: CounterTypes;
    onIncrement: (counter: CounterTypes) => void
    onDecrement: (counter: CounterTypes) => void
}

const Counter = (props: CounterProps) => {
    const { counter, onIncrement, onDecrement } = props
    // destructuring , like props.counter.count = counter.count
    // based on above code. 
    return (
        <>
            <div className="m-5">
                <button onClick={() => props.onDecrement(counter)}>Decrement</button >
                <span className="btn btn-warning ">{counter.count}
                </span>
                <button onClick={() => props.onIncrement(counter)}>
                    Increase
                </button>
            </div>
        </>
    )
}

export default Counter;