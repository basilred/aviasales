import { Component } from 'react';
import FilterGroup from './FilterGroup';
import Tickets from './Tickets';
import { TTicket } from './Ticket/Ticket';
import logo from './App__logo.svg';
import './App.css';

interface State {
  tickets: TTicket[];
  currentFilters: number[];
}

class App extends Component<{}, State> {
  getId: () => number;

  constructor(props: any) {
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
      .then((responseData: {tickets: TTicket[]}) => {
        responseData.tickets.forEach((ticket: TTicket) => { ticket.uid = this.getId(); });
        this.setState({ tickets: responseData.tickets });
      })
      .catch((error) => `Error fetching and parsing data\n${error}`);
  }

  handleFilterChange = (filters: number[]) => {
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
