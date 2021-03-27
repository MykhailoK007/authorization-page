import React from 'react';
import css from './Input.module.scss';
import cn from 'classnames';
import { InputProps } from '../../../models/formik';

export const Input = ({ label, classes, error, ...props }: InputProps) => {
  return (
    <label className={cn(css.inputWrapper, classes?.wrapper)}>
      <span>{label}</span>
      <input {...props} />
      {error && <div>{error}</div>}
    </label>
  );
};
