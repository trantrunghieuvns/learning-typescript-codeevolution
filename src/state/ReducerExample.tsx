import React, { useReducer } from 'react'
type CounterState = {
    count: number
}
type CounterAction = {
    type: string
    payload: number
}


const initialState = { count: 0 }

export function ReducerExample(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }

        default:
            return state
    }
}

export const ReducerCounter = () => {
    const [state, dispatch] = useReducer(ReducerExample, initialState)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Increment 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 4 })}>
                Decrement 8
            </button>
        </>
    )
}

