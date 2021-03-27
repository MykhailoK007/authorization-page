import * as Yup from 'yup';

export const UserFormSchema = Yup.object().shape({
  firstName: Yup.string().min(3, 'Minimum 3 chars').max(15, 'Max 10 chars').required(),
  lastName: Yup.string().min(3, 'Minimum 3 chars').max(15, 'Max 10 chars').required(),
  username: Yup.string().min(3, 'Minimum 3 chars').max(15, 'Max 10 chars').required(),
  email: Yup.string().email('Invalid email').required(),
  address: Yup.string().required(),
  address2: Yup.string().optional(),
  country: Yup.string().required(),
  state: Yup.string().min(3, 'Minimum 3 chars').max(15, 'Max 10 chars').required(),
  zip: Yup.number().min(5, '5 chars required').max(5, '5 chars required').required()
});
