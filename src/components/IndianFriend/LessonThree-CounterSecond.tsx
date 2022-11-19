import { useState } from "react";
import { CounterProps } from "./LessonThree";

const Counter = (props: CounterProps) => {
    const { counter, onIncrement, onDecrement } = props
    // counter:CounterTypes has all value from parents, pass down to children which is this component (CounterProps)
    //e.g: props: >> {counter:{id:1,number:232,minus:2324}, onIncree..}
    // destructuring , like props.counter.count = counter.count
    // based on above code. 
    return (
        <>
            <div className="m-5" key={counter.id}>
                <button onClick={() => props.onDecrement(counter)}>Decrement</button >
                {/* spread counter object has count > into fn onDecrement  */}
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