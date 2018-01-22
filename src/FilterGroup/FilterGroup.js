import React, { Component } from 'react';
import './FilterGroup.css';

import Filter from '../Filter/Filter';

class FilterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [
                { name: 'all', description: 'Все', value: -1 },
                { name: 'direct', description: 'Без пересадок', value: 0 },
                { name: 'one', description: '1 пересадка', value: 1 },
                { name: 'two', description: '2 пересадки', value: 2 },
                { name: 'three', description: '3 пересадки', value: 3 },
            ],
        };
    }

    handleFilterChange = (event, filter) => {
        // получить объект { filter, checked }
        // [-1, 0, 1, 2, 3, 4]
        this.setState(prevState => ({
            filters: prevState.filters
        }));

        this.props.filterChange(this.state.filters);
    }

    render() {
        return (
            <form className="FilterGroup">
                <h1 className="FilterGroup__title">Количество пересадок</h1>
                {this.state.filters.map(filter => <Filter key={filter.name} filter={filter} filterChange={this.handleFilterChange}/>)}
            </form>
        );
    }
}

export default FilterGroup;
