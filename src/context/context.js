import React, { createContext, useReducer } from 'react';
import { toDontReducer } from './reducer';

const initialState = [];

const AppContext = createContext({ state: initialState, dispatch: () => null });

const persistState = () => {
    const localData = localStorage.getItem('toDonts');

    return localData ? JSON.parse(localData).state : initialState;
};

const AppProvider = ({ children }) => {
    // UseReducer can take a 3rd argument here which is an initializer function.
    // This will replace initialState as whatever the return value of that function is..
    const [state, dispatch] = useReducer(toDontReducer, initialState, persistState);
    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
