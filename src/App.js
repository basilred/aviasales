import React, { Component } from 'react';
import logo from './App__logo.svg';
import './App.css';

import Filter from './Filter/Filter';
import Tickets from './Tickets/Tickets';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App__header">
                    <img src={logo} className="App__logo" alt="logo" />
                </header>
                <div className="App__content">
                    <Filter />
                    <Tickets />
                </div>
            </div>
        );
    }
}

export default App;
