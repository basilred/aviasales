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
      currentFilters: [],
    };

    const newUid = () => {
      let uid = 0;
      return () => {
        uid += 1;
        return uid;
      };
    };
    this.getId = newUid();
  }

  componentDidMount() {
    fetch('./tickets.json')
      .then((response) => response.json())
      .then((responseData) => {
        /* eslint no-param-reassign: ["error", { "props": false }] */
        responseData.tickets.forEach((ticket) => { ticket.uid = this.getId(); });
        this.setState({ tickets: responseData.tickets });
      })
      .catch((error) => `Error fetching and parsing data\n${error}`);
  }

  handleFilterChange = (filters) => {
    this.setState({
      currentFilters: filters,
    });
  }

  render() {
    const { currentFilters, tickets } = this.state;

    return (
      <div className="App">
        <header className="App__header">
          <img src={logo} className="App__logo" alt="logo" />
        </header>
        <div className="App__content">
          <FilterGroup
            filters={currentFilters}
            filterChange={this.handleFilterChange}
          />
          <Tickets
            filters={currentFilters}
            tickets={tickets}
          />
        </div>
      </div>
    );
  }
}

export default App;
