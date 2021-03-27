import React from 'react';
import { InputProps } from '../../../models/formik';
import css from './MarkedInput.module.scss';

export const MarkedInput = ({ label, ...props }: InputProps) => {
  return (
    <label className={css.inputWrapper}>
      <input {...props} />
      <span>{label}</span>
    </label>
  );
};
