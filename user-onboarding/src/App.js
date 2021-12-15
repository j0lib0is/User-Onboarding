import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import FormSchema from './validation/formSchema';
import './App.css';
import Form from './components/Form';


// DEFAULTS
const defaultUsers = [];

const defaultValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
};

const defaultErrors = {
  name: '',
  email: '',
  password: '',
  tos: ''
};

const defaultDisabled = true;

// APP
function App() {
  // STATES //
  const [ users, setUsers ] = useState(defaultUsers);
  const [ formValues, setFormValues ] = useState(defaultValues);
  const [ formErrors, setFormErrors ] = useState(defaultErrors);
  const [ disabled, setDisabled ] = useState(defaultDisabled);

  // HELPERS //
  const validate = (name, value) => {
    yup.reach(FormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  // EVENT HANDLERS //
  const changeHandler = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  }

  const submitHandler = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos
    }
  }

  // SIDE EFFECTS //

  // RETURN //
  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <div className='container'>
        <Form
          values={formValues}
          change={changeHandler}
          submit={submitHandler}
          disabled={disabled}
          errors={formErrors}
        />
      </div>
    </div>
  );
}

export default App;
