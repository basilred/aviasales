import { ChangeEvent } from 'react';
import './Filter.css';

export interface TFilter {
  name: string;
  description: string;
  value: number;
  checked: boolean;
}

interface Props {
  filter: TFilter;
  filterChange: (filter: TFilter, checked: boolean) => void;
  filterOnly: (filter: TFilter) => void;
}

const Filter = ({ filter, filterChange, filterOnly }: Props) => {
  const filterChangeFilter = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event);
    filterChange(filter, event.currentTarget.checked);
  };

  const handleClick = () => {
    filterOnly(filter);
  };

  return (
    <label key={filter.name} className="Filter" htmlFor={filter.name}>
      <input
        type="checkbox"
        id={filter.name}
        name={filter.name}
        onChange={filterChangeFilter}
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

export default Filter;
