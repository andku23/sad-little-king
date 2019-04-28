import React from 'react';
import loader from '../imgs/Derptardactionsmall.gif';
import './Loader.css'

class Loader extends React.Component {
    render() {
        return (
            <div className = "loader-base">
                <img className= "loader-img" src= {loader}/>
            </div>
        );
    }
}

export default Loader;