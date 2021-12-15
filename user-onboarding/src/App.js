import React, { useState } from 'react';
import logo from './logo.svg';
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

  // EVENT HANDLERS //
  const changeHandler = (name, value) => {
    
  }

  const submitHandler = () => {

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
