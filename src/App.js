import React, { useContext } from 'react';
import './App.scss';
import InputContainer from './components/InputContainer/InputContainer';
import ToDontsContainer from './components/ToDontsContainer/ToDontsContainer';
import { AppContext } from './context/context';

const App = () => {
    // const [toDonts, setToDonts] = useState([]);

    // const handleAddNewToDont = (newToDont) => {
    //     setToDonts([...toDonts, newToDont]);
    // };

    //We know we're getting state as an array and dispatch as the function, we only need state here.
    const { state } = useContext(AppContext);

    return (
        <div className="App">
            <header className="App-header">
                <h2>To Don't App</h2>
            </header>
            <div className="mainAppBody">
                <InputContainer />
                <ToDontsContainer toDonts={state} />
            </div>
        </div>
    );
};

export default App;
