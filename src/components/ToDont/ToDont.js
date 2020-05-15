import React from 'react';
import s from './ToDont.module.scss';
import { Button } from '@material-ui/core';

const ToDont = ({ name }) => {
    const handleTheShameOfDoingAToDont = () => {
        // When the Button is Clicked We need to Remove this... Waaayyy up there..
    };

    return (
        <div className={s.toDontContainer}>
            <h2>{name}</h2>
            <Button variant="contained" color="secondary" onClick={() => handleTheShameOfDoingAToDont}>
                I Did It
            </Button>
        </div>
    );
};

export default ToDont;
