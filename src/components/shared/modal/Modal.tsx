import React, { useState } from 'react';
import { Product } from '../../../interfaces';
import css from './Modal.module.scss';

interface IModal {
  title: string;
  handleSubmit(prod: Partial<Product>): void;
  toggleModal(): void;
  id?: number;
}

export const Modal = ({ title, handleSubmit, toggleModal, id }: IModal) => {
  const [localDate, setLocalDate] = useState<Partial<Product> | null>({ id: id });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLocalDate({ ...localDate!, [e.target.name]: e.target.value });
  };
  return (
    <div className={css.modal}>
      <div className={css.form}>
        <div className={css.formHeader}>
          <button onClick={toggleModal}>x</button>
          <div className={css.title}>{title}</div>
        </div>
        <div className={css.formBody}>
          <div className={css.inputWrapper}>
            <label>
              <span>Name: </span>
              <input type='text' onChange={handleChange} name='name' />
            </label>
          </div>
          <div className={css.inputWrapper}>
            <label>
              <span>Price: </span>
              <input type='number' name='price' onChange={handleChange} />
            </label>
          </div>
        </div>
        <button
          className={css.formSubmit}
          onClick={() => {
            handleSubmit(localDate!);
            toggleModal();
          }}
        >
          {' '}
          Accept{' '}
        </button>
      </div>
    </div>
  );
};
