import React, { useRef, useState } from 'react';
import './DynamicForm.css';

const DynamicForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    errors: {
      name: '',
      email: '',
      password: '',
    },
  });

  const handleFocus = (ref) => {
    ref.current.focus();
  };

  const validateInput = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (value.trim().length < 3) error = 'Name must be at least 3 characters long';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) error = 'Invalid email address';
        break;
      case 'password':
        if (value.length < 6) error = 'Password must be at least 6 characters long';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateInput(name, value);

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: error,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, errors } = formState;

    if (Object.values(errors).some((error) => error)) {
      alert('Please fix the errors in the form');
    } else {
      alert('Form submitted successfully');
      console.log({ name, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          ref={nameRef}
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          onFocus={() => handleFocus(nameRef)}
        />
        {formState.errors.name && <span className="error">{formState.errors.name}</span>}
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          ref={emailRef}
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          onFocus={() => handleFocus(emailRef)}
        />
        {formState.errors.email && <span className="error">{formState.errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          ref={passwordRef}
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          onFocus={() => handleFocus(passwordRef)}
        />
        {formState.errors.password && <span className="error">{formState.errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
