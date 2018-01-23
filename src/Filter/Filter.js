import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleClick = (args) => {
        console.log(args);
    }

    filterChange = (filter, e) => {
        // console.log(filter);
        // console.log(e.currentTarget.checked);
        this.props.filterChange(filter, e.currentTarget.checked);
    }

    render() {
        const filter = this.props.filter;

        return (
            <label key={filter.name} className="Filter">
                <input
                    type="checkbox"
                    name={filter.name}
                    onChange={this.filterChange.bind(this, filter)}
                />
                <span className="Filter__description">
                    {filter.description}
                </span>
                <button className="Filter__button" type="button" onClick={this.handleClick}>ТОЛЬКО</button>
            </label>
        );
    }
}

export default Filter;
