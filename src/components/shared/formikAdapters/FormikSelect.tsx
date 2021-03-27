import React from 'react';
import { useField } from 'formik';
import { Select } from '../select';
import { FormikSelectProps } from '../../../models/formik';

export const FormikSelect = (props: FormikSelectProps) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched ? meta.error : undefined;
  return <Select {...field} {...props} error={error} />;
};
