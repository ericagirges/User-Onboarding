import React from "react";
import styled from "styled-components";

const Form = (props) => {
  const { values, submit, updateInput, updateCheckbox, disabled, errors } = props

  const onSubmit = event => {
    event.preventDefault()
    submit()
  }

  const onUpdateCheckbox = event => {
    const { name, checked } = event.target
    updateCheckbox(name, checked)
  }

  const onUpdateInput = event => {
    const { name, value } = event.target
    updateInput(name, value)
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>User Registration</h2>

      <h4>General Information</h4>

      <label>
        Name&nbsp;
        <input
          value={values.name}
          onChange={onUpdateInput}
          name="name"
          type="text"
        />
      </label>
      <label>
        Email&nbsp;
        <input
          value={values.username}
          onChange={onUpdateInput}
          name="email"
          type="text"
        />
      </label>
      <label>
        Password&nbsp;
        <input
          value={values.password}
          onChange={onUpdateInput}
          name="password"
          type="text"
        />
      </label>

      <h4>
        <a href="App.js">Terms of Service</a>
      </h4>
      {/* checkboxes start here */}
      <label>
        I have read and agree to the terms of service
        <input
          type="checkbox"
          name="terms"
          checked={values.terms}
          onChange={onUpdateCheckbox}
        />
      </label>
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.terms}</div> 
      </div>
      <button>submit</button>
    </form>
  );
};

export default Form;
