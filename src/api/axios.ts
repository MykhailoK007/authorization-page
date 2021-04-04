import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://192.168.0.151:3000'
// });

// instance.interceptors.request.use(req => {
//   const token = localStorage.getItem('token');

//   if (token) {
//     req.headers = {
//       Authorization: `Bearer ${token}`
//     };
//   }
//   return req;
// });
// instance.interceptors.response.use(
//   res => res,
//   error => {
//     if (error.response.status === 401) {
//       window.location.replace('/login');
//     }
//     console.log(error.response);
//     Promise.reject(error);
//   }
// );

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});
export default {
  instance
};
