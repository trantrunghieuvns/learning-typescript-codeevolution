import React from "react";
import { useState } from "react";
import Counter from "./LessonThree-CounterSecond";

export interface CounterTypes {
    id: number;
    count: number;
    // count will be inside
    // {CounterProps:{counter:CounterTypes}}:props in
    // CounterSecond component, so we can take count out by
    // props.counter.count >>>>
    minus: number;
}

export type CounterProps = {
    counter: CounterTypes;
    onIncrement: (counter: CounterTypes) => void
    onDecrement: (counter: CounterTypes) => void
}

const Counters: CounterTypes[] = [
    { id: 1, count: 672, minus: 43 },
    { id: 2, count: 563, minus: 1 },
    { id: 3, count: 5461, minus: 434 },
    { id: 4, count: 4560, minus: 55 },
];

export function LessonThree(props: CounterTypes) {
    const [counters, setCounters] = useState<CounterTypes[]>(Counters)
    const handleReset = () => {
        const localCounters = counters.map((c) => {
            c.count = 0;
            return c;
        }
        )
        setCounters(localCounters);
    }

    const increment = (counter: CounterTypes) => {
        const localCounters = [...counters]
        const index = counters.indexOf(counter);
        localCounters[index].count = localCounters[index].count + counter.minus
        setCounters(localCounters);
    }

    const decrement = (counter: CounterTypes) => {
        const localCounters = [...counters]
        const index = counters.indexOf(counter);
        localCounters[index].count = localCounters[index].count - counter.minus
        setCounters(localCounters);
    };

    return (<div>
        <button onClick={() => handleReset()}
        >Reset ALL</button>
        {counters.map((counter) => <>
            <Counter key={counter.id * counter.minus} counter={counter} onIncrement={increment} onDecrement={decrement} />
        </>)}
    </div>)

}