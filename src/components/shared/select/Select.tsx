import React from 'react';
import { SelectProps } from '../../../models/formik';

export const Select = ({ label, options, classes, error }: SelectProps) => {
  return (
    <label className={classes?.wrapper}>
      <span>{label}</span>
      <select defaultValue='Choose...'>
        <option value=''>Choose...</option>
        {options.map((val: string) => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {error && <div>{error}</div>}
    </label>
  );
};
