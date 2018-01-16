import React, { Component } from 'react';
import './Filter.css';

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

    handleClick = (args) => {
        console.log(args);
    }

    getFilters = () => {
        return this.state.filters.map(filter => {
            return (
                <label key={ filter.name } className="Filter__item">
                    <input type="checkbox" name={ filter.name } />
                    <span className="Filter__description">
                        { filter.description }
                    </span>
                    <button className="Filter__button" type="button" onClick={this.handleClick}>ТОЛЬКО</button>
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
