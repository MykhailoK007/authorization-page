import { Formik, Form } from 'formik';
import { UserFormSchema } from '../../utils/validation-schemas';
import { FormikInput, FormikMarkedInput, FormikSelect } from '../shared/formikAdapters';
import css from './FormWrapper.module.scss';

interface UserFormValue {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  address: string;
  address2?: string;
  country: string;
  state?: string;
  zip: string;
}
const defaultValue: UserFormValue = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  address: '',
  address2: '',
  country: '',
  state: '',
  zip: ''
};

export const FormWrapper = () => {
  return (
    <div className={css.formWrapper}>
      <Formik<UserFormValue>
        initialValues={defaultValue}
        validationSchema={UserFormSchema}
        onSubmit={val => {
          debugger;
          console.log(val);
        }}
      >
        <Form>
          <div className={css.formHeader}>Billing address</div>
          <div className={css.formBody}>
            <FormikInput name='firstName' label='FirstName' classes={{ wrapper: css.averageInput }} />
            <FormikInput name='lastName' label='LastName' classes={{ wrapper: css.averageInput }} />
            <FormikInput name='username' label='Username' />
            <FormikInput name='email' label='Email' type='email' />
            <FormikInput name='address' label='Address' />
            <FormikInput name='address2' label='Address 2' />
            <FormikSelect
              label='Country'
              name='country'
              options={['UA', 'USA', 'UK']}
              classes={{ wrapper: css.smallInput }}
            />
            <FormikInput name='state' label='State' classes={{ wrapper: css.smallInput }} />
            <FormikInput name='zip' label='Zip' classes={{ wrapper: css.smallInput }} />
          </div>
          <div className={css.formBodyActions}>
            <FormikMarkedInput
              type='checkbox'
              name='shipping'
              label='Shipping address is the same as my billing address'
            />
            <FormikMarkedInput type='checkbox' name='saveme' label='Save this information for next time' />
          </div>
          <div className={css.formBodyActions}>
            <header>Payment</header>
            <FormikMarkedInput type='radio' name='payment' label='Credit card' />
            <FormikMarkedInput type='radio' name='payment' label='Debit card' />
            <FormikMarkedInput type='radio' name='payment' label='PayPal' />
          </div>

          <button className={css.submitForm}>Send</button>
        </Form>
      </Formik>
    </div>
  );
};
