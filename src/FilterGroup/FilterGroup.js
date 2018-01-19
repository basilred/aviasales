import React, { Component } from 'react';
import './FilterGroup.css';

import Filter from '../Filter/Filter';

class FilterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [
                { name: 'all', description: 'Все' },
                { name: 'direct', description: 'Без пересадок' },
                { name: 'one', description: '1 пересадка' },
                { name: 'two', description: '2 пересадки' },
                { name: 'three', description: '3 пересадки' },
            ]
        };
    }

    render() {
        return (
            <form className="FilterGroup">
                <h1 className="FilterGroup__title">Количество пересадок</h1>
                {this.state.filters.map((filter, index) => <Filter key={index} filter={filter}/>)}
            </form>
        );
    }
}

export default FilterGroup;
