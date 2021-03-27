import React from 'react';
import { FormikCheckboxProps } from '../../../models/formik';
import { MarkedInput } from '../markedInput';

export const FormikMarkedInput = (props: FormikCheckboxProps) => {
  return <MarkedInput {...props} />;
};
