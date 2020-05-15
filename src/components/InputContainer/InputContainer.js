import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

import s from './InputContainer.module.scss';

const InputContainer = ({ addToDont }) => {
    const [inputName, setInputName] = useState('');

    return (
        <div className={s.inputContainer}>
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={(event) => setInputName(event.target.value)}
            />
            <Button disabled={inputName.length < 1} onClick={() => addToDont({ name: inputName })}>
                Add To Don't
            </Button>
        </div>
    );
};

export default InputContainer;
