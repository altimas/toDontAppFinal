import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.scss';
import InputContainer from './components/InputContainer/InputContainer';
import ToDontsContainer from './components/ToDontsContainer/ToDontsContainer';

const App = () => {
    const [toDonts, setToDonts] = useState([]);
    const [viewToDonts, setViewToDonts] = useState(false);

    const handleAddNewToDont = (newToDont) => {
        setToDonts([...toDonts, newToDont]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>To Don't App</h2>
                <Button variant="contained" color="primary" onClick={() => setViewToDonts(!viewToDonts)}>
                    {viewToDonts ? 'Add To Dont' : 'View To Donts'}
                </Button>
            </header>
            <div className="mainAppBody">
                {!viewToDonts && <InputContainer addToDont={handleAddNewToDont} />}
                {viewToDonts && <ToDontsContainer toDonts={toDonts} />}
            </div>
        </div>
    );
};

export default App;
