import React, { useState } from 'react';
import './App.css';
import './global.css';

function App() {

    let [counter, setCounter] = useState(0);

    function contar() {
        setCounter(counter + 1);
    }

    return (
        <div id="app">
            <aside>
                <strong className="titulo">Cadastrar</strong>
                <form>
                    <label htmlFor="username_github">Usuário GitHub</label>
                    <input type="text" name="username_github" id="username_github" />

                    <label htmlFor="techs">Tenologias</label>
                    <input type="text" name="techs" id="techs" />


                    <label htmlFor="username_github">Usuário GitHub</label>
                    <input type="text" name="username_github" id="username_github" />
                                        
                    
                </form>
            </aside>
            <main></main>
        </div>
    );
}

export default App;
