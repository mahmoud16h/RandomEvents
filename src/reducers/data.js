const initialState = {}

export const data = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            const randomArray = getRandom(action.data.data.events, 5)
            return {...state, events: action.data, filteredEvents: randomArray}
        case 'RANDOM_CARDS':
            const randomised = getRandom(state.events.data.events, 5)
            return {...state, filteredEvents: randomised}
        default:
            return state
    }
}

const getRandom = (arr, n) => {
    let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        let x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
