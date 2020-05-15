import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';

import s from './InputContainer.module.scss';
//Pull in AppContext
import { AppContext } from '../../context/context';

const InputContainer = () => {
    const [inputName, setInputName] = useState('');

    // Declare our dipatch that we'll use to pass an action and create a ToDont!
    const { dispatch } = useContext(AppContext);

    // Make it look nicer in its own function and then use it in the onClick event for our Add To Don't Button!
    const handleCreateToDont = () => {
        dispatch({ type: 'ADD_TO_DONT', payload: { name: inputName } });
    };

    return (
        <div className={s.inputContainer}>
            <TextField
                id="outlined-basic"
                label="Thing to Not Do"
                variant="outlined"
                onChange={(event) => setInputName(event.target.value)}
            />
            <Button disabled={inputName.length < 1} onClick={handleCreateToDont}>
                Add To Don't
            </Button>
        </div>
    );
};

export default InputContainer;
