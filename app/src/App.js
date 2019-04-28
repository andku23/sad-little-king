import React from 'react';
import logo from './logo.svg';
import './App.css';
import State from './State.js';

class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App">
                <State/>
            </div>
        );
    }
}

export default App;
