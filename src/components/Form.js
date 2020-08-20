import React from "react";
import styled from "styled-components";

const FormContainer = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const FormStyler = styled.form`
    width: 400px;
    height: 600px;
    border: 1px solid #a8a8a8;
    border-radius: 10px;
    font-family: "Nunito";
    font-weight: 600;
    background-color: whitesmoke;

    h2 {
      margin-bottom: 30px;
      font-size: 1.9em;
      font-weight: 700;
    }

    h3 {
      font-size: 1.4em;
    }
`

const InputFields = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-top: 120px;
    font-weight: 400;
    height: 300px;
    width: 400px;

    label {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        text-align: right;
        width: 350px;
        line-height: 26px;
        margin-bottom: 10px;
}

    input {
        height: 30px;
        width: 200px;
        flex: 0 0 200px;
        margin-left: 20px;
        font-family: "Nunito"
    }

    input:hover {
        border: 3px solid black;
    }

    h4 {
      width: 100%;
    }

    button {
        align-self: center;
        width: 150px;
        height: 50px;
        border-radius: 10px;
        margin-top: 20px;
        background-color: #1ADABE;
        font-family: "Nunito";
        font-weight: 600;
        font-size: 14px;
        
    }
    `

    const Terms = styled.div `
      display: flex;
      width: 400px;
      justify-content: center;
      
      label {
        width: 100%;
      }

      input {
        width: 20px;
        height: 20px;
        margin-left: 0;
        flex: 0 0 60px;
      }

    `

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
    <FormContainer>
    <FormStyler onSubmit={onSubmit}>
      <h2>User Registration</h2>

      <h3>General Information</h3>
      <InputFields>
      <label>
        First Name&nbsp;
        <input
          value={values.fname}
          onChange={onUpdateInput}
          name="fname"
          type="text"
        />
      </label>
      <label>
        Last Name&nbsp;
        <input
          value={values.lname}
          onChange={onUpdateInput}
          name="lname"
          type="text"
        />
      </label>
      <label>
        Location&nbsp;
        <select
            onChange={onUpdateInput}
            value={values.location}
            name='location'
          >
            <option value=''>- Select an option -</option>
            <option value='alabama'>Alabama</option>
            <option value='alaska'>Alaska</option>
            <option value='arizona'>Arizona</option>
            <option value='arkansas'>Arkansas</option>
            <option value='california'>California</option>
            <option value='colorado'>Colorado</option>
            <option value='connecticut'>Connecticut</option>
            <option value='delaware'>Delaware</option>
            <option value='florida'>Florida</option>
            <option value='georgia'>Georgia</option>
            <option value='hawaii'>Hawaii</option>
            <option value='idaho'>Idaho</option>
            <option value='illinois'>Illinois</option>
            <option value='indiana'>Indiana</option>
            <option value='iowa'>Iowa</option>
            <option value='kansas'>Kansas</option>
            <option value='kentucky'>Kentucky</option>
            <option value='louisiana'>Louisiana</option>
            <option value='maine'>Maine</option>
            <option value='maryland'>Maryland</option>
            <option value='massachusetts'>Massachusetts</option>
            <option value='michigan'>Michigan</option>
            <option value='minnesota'>Minnesota</option>
            <option value='mississippi'>Mississippi</option>
            <option value='missouri'>Missouri</option>
            <option value='montana'>Montana</option>
            <option value='nebraska'>Nebraska</option>
            <option value='nevada'>Nevada</option>
            <option value='new hampshire'>New Hampshire</option>
            <option value='new jersey'>New Jersey</option>
            <option value='new mexico'>New Mexico</option>
            <option value='new york'>New York</option>
            <option value='north carolina'>North Carolina</option>
            <option value='north dakota'>North Dakota</option>
            <option value='ohio'>Ohio</option>
            <option value='oklahoma'>Oklahoma</option>
            <option value='oregon'>Oregon</option>
            <option value='pennsylvania'>Pennsylvania</option>
            <option value='rhode island'>Rhode Island</option>
            <option value='south carolina'>South Carolina</option>
            <option value='south dakota'>South Dakota</option>
            <option value='tennessee'>Tennessee</option>
            <option value='texas'>Texas</option>
            <option value='utah'>Utah</option>
            <option value='vermont'>Vermont</option>
            <option value='virginia'>Virginia</option>
            <option value='washington'>Washington</option>
            <option value='west virginia'>West Virginia</option>
            <option value='wisconsin'>Wisconsin</option>
            <option value='wyoming'>Wyoming </option>
          </select>
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
      <Terms>
      <label>
        I have read and agree to the terms of service
        </label>
        <input
          type="checkbox"
          name="terms"
          checked={values.terms}
          onChange={onUpdateCheckbox}
        />
      
      </Terms>
      <div className="errors">
        <div>{errors.fname}</div>
        <div>{errors.lname}</div>
        <div>{errors.location}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.terms}</div> 
      </div>
      <button disable={disabled}>submit</button>
      </InputFields>
    </FormStyler>
    </FormContainer>
  );
};

export default Form;
