import React, { createContext, useReducer } from 'react';
import toDontReducer from './reducer';

//Initialize our State
const initialState = [];

//Create our Context
const AppContext = createContext({ state: initialState, dispatch: () => null });

// Initializer Function that we pass in later for persisting.
const persistState = () => {
    const localData = localStorage.getItem('toDonts');

    return localData ? JSON.parse(localData).state : initialState;
};

// App Proviver passes in Children and then defines our reducer and passes those in as the values
const AppProvider = ({ children }) => {
    //First we need to create our reducer to pass in.

    // UseReducer can take a 3rd argument here which is an initializer function.
    // This will replace initialState as whatever the return value of that function is..
    const [state, dispatch] = useReducer(toDontReducer, initialState, persistState);
    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

// Export out the AppContext and our Provider
export { AppContext, AppProvider };
