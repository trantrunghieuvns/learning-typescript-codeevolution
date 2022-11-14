export const initialState = { count: 0 }
type CounterAction = UpdateAction | ResetAction

type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: "reset"; payload: number;
}
export function ReducerExample(state: CounterState, action: CounterAction) {
    switch (action.type) { // give this action.type types in dispatchAction file
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count + action.payload }
        case 'reset':
            return initialState
        // count: state.count * 0,
        // payload: 0

        default:
            return state
    }
}