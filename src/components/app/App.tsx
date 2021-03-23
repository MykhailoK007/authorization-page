import React from 'react';
import { Content } from '../content';
import { Formik, Form } from 'formik';
import { FormikInput } from '../shared/formikAdapters';
import { UserFormSchema } from '../../utils/validation-schemas';

interface UserFormValue {
  firstName: string;
  lastName: string;
  email: string;
}
const defaultValue: UserFormValue = {
  firstName: '',
  lastName: '',
  email: ''
};
export const App = () => {
  return (
    <div>
      <Formik<UserFormValue>
        initialValues={defaultValue}
        validationSchema={UserFormSchema}
        onSubmit={val => {
          console.log(val);
        }}
      >
        <Form>
          <FormikInput name='firstName' label='firstName' />
          <FormikInput name='lastName' label='lastName' />
          <FormikInput name='email' label='email' />
          <button>Send</button>
        </Form>
      </Formik>
    </div>
  );
};
