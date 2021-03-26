import React, { useEffect, useState } from 'react';
import { Content } from '../content';
import { Formik, Form } from 'formik';
import { FormikInput } from '../shared/formikAdapters';
import { UserFormSchema } from '../../utils/validation-schemas';
import { deleteCategory, getCategories, postCategory } from '../../api/categories/endpoints';
import { Category } from '../../api/categories/types';
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
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const loadCategory = async () => {
      const res = await getCategories();

      setCategories(res.data.data);
    };
    loadCategory();
  }, []);
  const sendCategory = async () => {
    const res = await postCategory({ iconId: 4, name: 'asdsa', description: 'asdasd' });
    console.log(res.data);
  };
  const removeCategory = (id: number) => {
    deleteCategory(id);
  };
  return (
    <div>
      <button onClick={sendCategory}>aa</button>
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
      <div>
        {categories.map(el => {
          return (
            <div key={el.id}>
              <span>{el.id}</span>
              <span>{el.name}</span>
              <button
                onClick={() => {
                  removeCategory(el.id);
                }}
              >
                delete 1{' '}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
