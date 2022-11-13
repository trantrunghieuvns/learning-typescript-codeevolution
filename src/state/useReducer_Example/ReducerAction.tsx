type CounterState = {
    count: number

}
type CounterAction = {
    type: 'increment' | 'decrement' | 'reset' // its string beforehand 
    payload: number
}

export const initialState = { count: 0 }

export function ReducerExample(state: CounterState, action: CounterAction) {
    switch (action.type) { // give this action.type types in dispatchAction file
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count + action.payload }
        case 'reset':
            return {
                count: state.count * 0,
                payload: 0
            }

        default:
            return state
    }
}