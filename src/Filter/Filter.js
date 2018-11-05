import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = (props) => {
  const filterChange = (e) => {
    props.filterChange(props.filter, e.currentTarget.checked);
  };

  const handleClick = () => {
    props.filterOnly(props.filter);
  };

  const { filter } = props;

  return (
    <label key={filter.name} className="Filter">
      <input
        type="checkbox"
        name={filter.name}
        onChange={filterChange}
      />
      <span className="Filter__description">
        {filter.description}
      </span>
      <button className="Filter__button" type="button" onClick={handleClick}>
        ТОЛЬКО
      </button>
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  filterChange: PropTypes.func.isRequired,
  filterOnly: PropTypes.func.isRequired,
};

export default Filter;
