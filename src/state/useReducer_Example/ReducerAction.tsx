type CounterState = {
    count: number
}
type CounterAction = {
    type: string
    payload: number
}

export const initialState = { count: 0 }

export function ReducerExample(state: CounterState, action: CounterAction) {
    switch (action.type) { // give this action.type => type in dispatchAction file
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }

        default:
            return state
    }
}