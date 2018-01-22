import React, { Component } from 'react';
import logo from './App__logo.svg';
import './App.css';

import FilterGroup from './FilterGroup/FilterGroup';
import Tickets from './Tickets/Tickets';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
            filters: []
        };
    }

    componentDidMount() {
        fetch('./tickets.json')
            .then(response => response.json())
            .then(responseData => {
                this.setState({tickets: responseData.tickets});
            })
            .catch(error => {
                return console.log(`Error fetching and parsing data\n${error}`);
            });
    }

    handleFilterChange = (filters) => {
        console.log('App', filters);
    }

    render() {
        return (
            <div className="App">
                <header className="App__header">
                    <img src={logo} className="App__logo" alt="logo" />
                </header>
                <div className="App__content">
                    <FilterGroup filterChange={this.handleFilterChange}/>
                    <Tickets tickets={this.state.tickets} filters={this.state.filters}/>
                </div>
            </div>
        );
    }
}

export default App;
