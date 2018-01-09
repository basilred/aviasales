import React, { Component } from 'react';

class Filter extends Component {
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

    getFilters = () => {
        return this.state.filters.map(filter => {
            return (
                <label>
                    <input type="checkbox" name={ filter.name } />
                    { filter.description }
                </label>
            );
        });
    }

    render() {
        return (
            <form className="Filter">
                <h1 className="Filter__title">Количество пересадок</h1>
                { this.getFilters() }
            </form>
        );
    }
}

export default Filter;
