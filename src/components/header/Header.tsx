import React from 'react';
import { Filter } from '../filter';
import { IFilterOptions } from '../interfaces';
import css from './Header.module.scss';

interface IHeader {
  toggleModal(): void;
  applyFilter(date: IFilterOptions): void;
}

export const Header = ({ toggleModal, applyFilter }: IHeader) => {
  return (
    <header className={css.header}>
      <div className={css.headerTitle}>Product list</div>
      <button className={css.addBtn} onClick={toggleModal}>
        +
      </button>
      <Filter onSubmit={applyFilter} />
    </header>
  );
};
