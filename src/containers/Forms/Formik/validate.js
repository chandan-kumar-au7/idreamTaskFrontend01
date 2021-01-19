import * as yup from 'yup';

const yString = yup.string();
export default yup.object().shape({
	email: yString.email('Invalid email address').required('Email is required!'),
	firstName: yString.required('First Name is required!'),
	lastName: yString.required('Last Name is required!'),
	password: yString.required('Password is required!'),
});
