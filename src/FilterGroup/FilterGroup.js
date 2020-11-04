import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FilterGroup.css';

import Filter from '../Filter/Filter';

class FilterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [
        {
          name: 'all', description: 'Все', value: -1, checked: false,
        },
        {
          name: 'direct', description: 'Без пересадок', value: 0, checked: false,
        },
        {
          name: 'one', description: '1 пересадка', value: 1, checked: false,
        },
        {
          name: 'two', description: '2 пересадки', value: 2, checked: false,
        },
        {
          name: 'three', description: '3 пересадки', value: 3, checked: false,
        },
      ],
    };
  }

  setOnly = (filter) => {
    const { filters } = this.state;
    const newFiltersState = [...filters]
      .map((filterItem) => ({ ...filterItem, checked: filter.value === filterItem.value }));

    this.setState({
      filters: newFiltersState,
    });
  }

  handleFilterChange = (filter, checked) => {
    const { filters, filterChange } = this.props;

    if (checked) {
      filters.push(filter.value);
    } else {
      filters.splice(filters.indexOf(filter.value), 1);
    }

    filterChange(filters);
  }

  handleFilterOnly = (filter) => {
    const { filterChange } = this.props;
    const filters = [filter.value];
    // берем все фильтры из стейта и выставляем им всем значение checked: false
    // кроме текущего, которому ставим true
    this.setOnly(filter);
    filterChange(filters);
  }

  render() {
    const { filters } = this.state;

    return (
      <form className="FilterGroup">
        <h1 className="FilterGroup__title">Количество пересадок</h1>
        {
          filters.map((filter) => (
            <Filter
              key={filter.name}
              filter={filter}
              filterChange={this.handleFilterChange}
              filterOnly={this.handleFilterOnly}
            />
          ))
        }
      </form>
    );
  }
}

FilterGroup.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.number).isRequired,
  filterChange: PropTypes.func.isRequired,
};

export default FilterGroup;
