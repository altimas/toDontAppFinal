export const toDontReducer = (state, action) => {
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
