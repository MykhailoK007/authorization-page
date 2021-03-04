import React, { useState } from 'react';
import cn from 'classnames';
import css from './pagination.module.scss';
import { ActionButton } from '../actionButton/actionButton';

interface PaginationProps {
  activePage: number;
  totalItems: number;
  perPage: number;
  withActions?: boolean;
  classes?: {
    btn?: string;
    activeBtn?: string;
  };
  onChange(setCurrentPage: number): void;
}

export const Pagination = ({
  activePage,
  totalItems,
  perPage,
  classes,
  withActions,
  onChange
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(activePage);
  const totalPages = Math.ceil(totalItems / perPage);
  const actionBtnStyles: string = cn(css.btn, classes?.btn);
  const handleChange = (currentPage: number) => {
    setCurrentPage(currentPage);
    onChange(currentPage);
  };
  return (
    <div className={css.wrapper}>
      {withActions && (
        <ActionButton
          className={actionBtnStyles}
          disabled={currentPage === 1}
          value='Prev'
          onClick={() => handleChange(currentPage - 1)}
        />
      )}

      {Array.from({ length: totalPages }).map((el, index) => {
        const pageNumber: number = index + 1;
        return (
          <button
            key={index}
            className={cn(css.btn, classes?.btn, {
              [css.activeBtn]: currentPage === pageNumber,
              [classes?.activeBtn || '']: currentPage === pageNumber
            })}
            onClick={() => handleChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      {withActions && (
        <ActionButton
          className={actionBtnStyles}
          value='Next'
          disabled={currentPage === totalPages}
          onClick={() => handleChange(currentPage + 1)}
        />
      )}
    </div>
  );
};
