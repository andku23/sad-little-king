import React from 'react';
import Home from './components/Home.js'
import Loader from './components/Loader.js'

class State extends React.Component {

    state = { isLoaded: true }

    constructor(props) {
        super(props);
    }

    render() {
        let current;

        if (this.state.isLoaded) {
            current = <Home />
        } else {
            current = <Loader />
        }

        return (
            current
        );
    }
}

export default State;
