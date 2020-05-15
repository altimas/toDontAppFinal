import React, { useState } from 'react';
import './App.scss';
import InputContainer from './components/InputContainer/InputContainer';
import ToDontsContainer from './components/ToDontsContainer/ToDontsContainer';

const App = () => {
    const [toDonts, setToDonts] = useState([]);

    const handleAddNewToDont = (newToDont) => {
        setToDonts([...toDonts, newToDont]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>To Don't App</h2>
            </header>
            <div className="mainAppBody">
                <InputContainer addToDont={handleAddNewToDont} />
                <ToDontsContainer toDonts={toDonts} />
            </div>
        </div>
    );
};

export default App;
