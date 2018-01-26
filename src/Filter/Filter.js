import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

class Filter extends Component {
  filterChange = (e) => {
    this.props.filterChange(this.props.filter, e.currentTarget.checked);
  }

  render() {
    const { filter } = this.props;

    return (
      <label key={filter.name} className="Filter">
        <input
          type="checkbox"
          name={filter.name}
          onChange={this.filterChange}
        />
        <span className="Filter__description">
          {filter.description}
        </span>
        <button className="Filter__button" type="button" onClick={this.handleClick}>
          ТОЛЬКО
        </button>
      </label>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  filterChange: PropTypes.func.isRequired,
};

export default Filter;
