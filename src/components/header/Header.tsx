import React from 'react';
import { Filter } from '../filter';
import { IFilterOptions } from '../../interfaces';
import { Link } from 'react-router-dom';
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
      <Link to='/cart' className={css.addBtn}>
        <button>Show Cart</button>
      </Link>
      <Filter onSubmit={applyFilter} />
    </header>
  );
};
