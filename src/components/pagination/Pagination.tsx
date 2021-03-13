import React from 'react';
import css from './Pagination.module.scss';
interface IPagination {
  page: number;
  handleClick(page: number): void;
  pageCount: number;
}

export const Pagination = ({ page, handleClick, pageCount }: IPagination) => {
  return (
    <div className={css.pagination}>
      <button onClick={() => handleClick(page - 1)} disabled={page === 1}>
        {' '}
        &lt;{' '}
      </button>
      <span>{page}</span>
      <button onClick={() => handleClick(page + 1)} disabled={page === pageCount}>
        {' '}
        &gt;{' '}
      </button>
    </div>
  );
};
