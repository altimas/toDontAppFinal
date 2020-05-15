const toDontReducer = (state, action) => {
    // So we just pass in the current state, and an action which is just {type: string, payload: whatever}
    //Based on the action.type we do different things with state.
    switch (action.type) {
        case 'ADD_TO_DONT':
            const newStateFromAdd = [...state, action.payload];
            //Store it on Local Storage as well to persist the State
            //Have to store as an object that we parse to a string.
            localStorage.setItem('toDonts', JSON.stringify({ state: newStateFromAdd }));
            return newStateFromAdd;
        case 'REMOVE_TO_DONT':
            const newStateFromRemove = state.filter((item) => item.name !== action.payload);
            localStorage.setItem('toDonts', JSON.stringify({ state: newStateFromRemove }));
            return [...newStateFromRemove];
        default:
            return state;
    }
};

export default toDontReducer;
