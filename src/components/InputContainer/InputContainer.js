import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';

import s from './InputContainer.module.scss';
import { AppContext } from '../../context/context';

const InputContainer = () => {
    const [inputName, setInputName] = useState('');

    const { dispatch } = useContext(AppContext);

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
