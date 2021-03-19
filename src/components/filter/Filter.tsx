import React, { useState } from 'react';
import { IFilterOptions } from '../../interfaces';
import css from './Filter.module.scss';
interface IFilter {
  onSubmit(date: IFilterOptions): void;
}
enum FilterType {
  PriceMore = 'priceMore',
  PriceLess = 'priceLess',
  Name = 'name'
}

export const Filter = ({ onSubmit }: IFilter) => {
  const [currentFilter, setCurrentFilter] = useState<string>();
  const [filterValue, setFilterValue] = useState<string | number>();
  const handleSubmit = () => {
    onSubmit({ [currentFilter!]: filterValue });
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setCurrentFilter(e.target.value);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };
  return (
    <div className={css.filter}>
      <select onChange={handleSelect}>
        <option value=''>default</option>
        <option value={FilterType.PriceMore}>Price more than</option>
        <option value={FilterType.PriceLess}>Price less than</option>
        <option value={FilterType.Name}>Name:</option>
      </select>
      <input type={currentFilter === FilterType.Name ? 'text' : 'number'} onChange={handleChange} />
      <button className={css.submitBtn} onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};
