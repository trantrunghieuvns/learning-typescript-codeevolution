export type stateType = {
    color?: string,
    size?: number,
}

export const reducer = (state: stateType, action: stateType): stateType => {

    switch (action.color) {
        case 'red': return { ...state, color: '#ff0000' }
        case 'green': return {
            ...state, color: '#00ff00'
        }
        case 'blue': return {
            ...state, color: '#0000ff'
        }

    }
    switch (action.size) {
        case 30: return { ...state, size: 30 }
        case 40: return {
            ...state, size: 40
        }
        case 200: return {
            ...state, size: 200
        }
        default: return state;
    }
};

