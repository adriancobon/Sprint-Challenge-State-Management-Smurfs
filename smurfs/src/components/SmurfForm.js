// Standard imports
import React, { useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
// Custom import
import { addSmurf } from '../actions/getSmurf';

const SmurfForm = props => {

  useEffect(() => {
    if(props.status) {
      props.addSmurf(props.status)
    }
  }, [props.status])

  return (
    <>
      <Form>
        <label>Enter your own smurf below!</label>
        <br/>
        {props.touched.name && props.errors.name && <p>{props.errors.name}</p>}
        <Field
          placeholder="Enter name..."
          name="name"
          type="text"
        />
        {props.touched.age && props.errors.age && <p>{props.errors.age}</p>}
        <Field
          placeholder="Enter age..."
          name="age"
          type="number"
        />
        {props.touched.height && props.errors.height && <p>{props.errors.height}</p>}
        <Field
          placeholder="Enter height in CM..."
          name="height"
          type="number"
        />
        <button type="submit">Submit Smurf</button>
      </Form>
    </>
  )
}

const FormikSmurfForm = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || '',
      age: age || '',
      height: height || '',
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    age: Yup.number().required("Age is required!"),
    height: Yup.number().required("Height is required!")
  }),

  handleSubmit(values, { setStatus, resetForm, setSubmitting }){
    setSubmitting(false);
    resetForm();
    setStatus(values);
  }
})(connect(
  null, { addSmurf }
)(SmurfForm))

export default FormikSmurfForm;