import React, { useReducer } from 'react'
import { reducer } from './reducer'



export const stateValue = { color: '#000022', size: 25 }

const UseReducerEx = () => {

    const [state, dispatch] = useReducer(reducer, stateValue)
    return (
        <div className='mx-4'>

            <h2 style={{ color: state.color, fontSize: state.size }}>Parent</h2>
            <br />
            <button className='border' onClick={() => {
                dispatch({
                    color: 'red'
                })
            }}>red</button>
            <button className='border' onClick={() => {
                dispatch({
                    color: 'green'

                })
            }}>green</button>
            <button className='border' onClick={() => {
                dispatch({
                    color: 'blue'
                })
            }}>blue</button>

            <button className='border' onClick={() => {
                dispatch({
                    size: 30
                })
            }}>30</button>
            <button className='border' onClick={() => {
                dispatch({
                    size: 200
                })
            }}>200</button>

        </div>
    )
}

export default UseReducerEx