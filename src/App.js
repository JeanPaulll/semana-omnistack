import React, {useState} from 'react';
import './App.css';
import './global.css';

function App() {

    let [counter, setCounter] = useState(0);

    function contar() {
        setCounter(counter + 1);
    }

    return (
        <div id="app">
            <aside></aside>
            <main></main>
        </div>
    );
}

export default App;
