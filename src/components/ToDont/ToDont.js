import React, { useContext } from 'react';
import s from './ToDont.module.scss';
import { Button } from '@material-ui/core';
// Bring in Context Again
import { AppContext } from '../../context/context';

const ToDont = ({ name }) => {
    //Declare Dispatch, note we could get state too if we wanted.
    const { dispatch } = useContext(AppContext);

    const handleTheShameOfDoingAToDont = () => {
        // When the Button is Clicked We need to Remove this... Waaayyy up there..

        //Do the dispatch and send an action to remove the ToDont!
        dispatch({ type: 'REMOVE_TO_DONT', payload: name });
    };

    return (
        <div className={s.toDontContainer}>
            <h2>{name}</h2>
            <Button variant="contained" color="secondary" onClick={handleTheShameOfDoingAToDont}>
                I Did It
            </Button>
        </div>
    );
};

export default ToDont;
