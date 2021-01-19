const validate = values => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'password',
    'agredTerms'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if (values.agredTerms && values.agredTerms !== true) {
    errors.agredTerms = 'Please agree all statements';
  }
  return errors;
};
export default validate;
