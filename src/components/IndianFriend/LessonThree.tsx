import React from "react";
import { useState } from "react";
import Counter from "./LessonThree-CounterSecond";


export interface CounterTypes {
    id: number;
    count: number;
    minus: number;
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

    return (<div>

        <button onClick={() => handleReset()}
        >Reset ALL</button>
        {counters.map((counter) => <>

            <Counter key={counter.id} count={counter.count} id={0} minus={counter.minus} />

        </>)}
    </div>)

}