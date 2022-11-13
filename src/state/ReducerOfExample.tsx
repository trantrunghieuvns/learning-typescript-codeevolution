export type ReducerProp = {
    count: number
    type: string
    payload: number
}


export const initialState = { count: 0 }


export function ReducerExample(state: ReducerProp, action: ReducerProp) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }

        default:
            return state
    }
}