import React, { useReducer } from 'react'
import { initialState, ReducerExample } from './ReducerAction'

export const ReducerCounter = () => {
    const [state, dispatch] = useReducer(ReducerExample, initialState)
    return (
        <>
            Count: {state.count}
            {/*  receive action.type from reducerAction > get type and write it down here */}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Increment 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 4 })}>
                Decrement 8
            </button>
        </>
    )
}

