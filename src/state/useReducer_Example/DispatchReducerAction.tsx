import React, { useReducer } from 'react'
import { ReducerExample } from './ReducerAction'
import { initialState } from './ReducerAction'



export const ReducerCounter = () => {
    const [state, dispatch] = useReducer(ReducerExample, initialState)
    return (
        <>
            Count: {state.count}
            {/*  receive action.type from reducerAction > get type and write it down here */}
            <button className='border-2 bg-gray-500 p-1 ' onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Increment 10
            </button>
            <button className='border-2 bg-gray-500 p-1' onClick={() => dispatch({ type: 'decrement', payload: 4 })}>
                Decrement 8
            </button>

            <button className='border-2 bg-gray-500 p-1 ' onClick={() => dispatch({ type: 'reset', payload: 0 })}>
                reset all
            </button>
            <div>
                {state.count === 0 ? 'hết rồi nhé' : 'chưa chắc đã hết đâu'}
            </div>

        </>
    )
}

