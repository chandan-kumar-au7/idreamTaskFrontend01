import React from 'react';
import { withFormik } from 'formik';
import {
  FormControl,
  FormHelperText,
  FormControlLabel,
} from '../../../components/uielements/form';
import validationSchema from './validate';
import Button from '../../../components/uielements/button';
import TextField from '../../../components/uielements/textfield';
import Radio, { RadioGroup } from '../../../components/uielements/radio';
import Checkbox from '../../../components/uielements/checkbox';

const RenderTextField = ({ error, errorText, ...props }) => {
  return (
    <div>
      <FormControl>
        <TextField error={error} {...props} />
        {error ? <FormHelperText>{errorText}</FormHelperText> : ''}
      </FormControl>
    </div>
  );
};
const RenderToggle = ({ id, error, errorText, label, value, onChange }) => (
  <div>
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={value}
            color="primary"
            onChange={() => onChange(id, !value)}
          />
        }
        label={label}
      />
      {error ? <FormHelperText>{errorText}</FormHelperText> : ''}
    </FormControl>
  </div>
);
const RenderRadioGroup = ({ onChange, ...props }) => {
  return (
    <RadioGroup
      {...props}
      onChange={(event, value) => onChange(props.id, value)}
      color="primary"
    />
  );
};
const MyInnerForm = ({
  values,
  touched,
  errors,
  dirty,
  isSubmitting,
  handleChange,
  handleBlur,
  handleReset,
  setFieldValue,
  onSubmit,
}) => {
  return (
    <form className="mainFormsWrapper">
      <div className="mainFormsInfoWrapper">
        <div className="mainFormsInfoField">
          <RenderTextField
            label="Enter your first name"
            id="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.firstName && touched.firstName}
            errorText={errors.firstName}
          />
        </div>
        <div className="mainFormsInfoField">
          <RenderTextField
            label="Enter your last name"
            id="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.lastName && touched.lastName}
            errorText={errors.lastName}
          />
        </div>
        <div className="mainFormsInfoField">
          <RenderTextField
            label="Enter your email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            errorText={errors.email}
          />
        </div>
        <div className="mainFormsInfoField">
          <RenderTextField
            label="Enter your password"
            id="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password && touched.password}
            errorText={errors.password}
          />
        </div>
      </div>
      <div className="mateFormsCheckList">
        <h4 className="radiButtonHeader">Gender</h4>
        <RenderRadioGroup
          label="Enter your sex"
          id="sex"
          value={values.sex}
          onChange={setFieldValue}
          color="primary"
        >
          <div className="mateFormsRadioList">
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              color="primary"
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              color="primary"
            />
          </div>
        </RenderRadioGroup>
      </div>
      <div className="mateFormsFooter">
        <div className="mateFormsChecBoxList">
          <RenderToggle
            label="I agree all statements in terms of service"
            id="agredTerms"
            value={values.agredTerms}
            onChange={setFieldValue}
            onBlur={handleBlur}
            error={!errors.agredTerms && touched.agredTerms}
            errorText={'Please agree'}
          />
        </div>
        <div className="mateFormsSubmit">
          <Button
            className={values.agredTerms ? 'mateFormsSubmitBtn' : ''}
            onClick={() => onSubmit(values)}
            disabled={!values.agredTerms}
          >
            Submit
          </Button>
          <Button
            color="secondary"
            className="mateFormsClearBtn"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >
            Reset
          </Button>
        </div>
      </div>
    </form>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    sex: 'male',
    agredTerms: false,
  }),
  validationSchema,
  displayName: 'BasicForm',
})(MyInnerForm);
