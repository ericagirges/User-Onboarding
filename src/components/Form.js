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
        border: 2px solid black;
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

    button:hover {
      background-color: #95BBB6;

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
            <option value='Alabama'>Alabama</option>
            <option value='Alaska'>Alaska</option>
            <option value='Arizona'>Arizona</option>
            <option value='Arkansas'>Arkansas</option>
            <option value='California'>California</option>
            <option value='Colorado'>Colorado</option>
            <option value='Connecticut'>Connecticut</option>
            <option value='Delaware'>Delaware</option>
            <option value='Florida'>Florida</option>
            <option value='Georgia'>Georgia</option>
            <option value='Hawaii'>Hawaii</option>
            <option value='Idaho'>Idaho</option>
            <option value='Illinois'>Illinois</option>
            <option value='Indiana'>Indiana</option>
            <option value='Iowa'>Iowa</option>
            <option value='Kansas'>Kansas</option>
            <option value='Kentucky'>Kentucky</option>
            <option value='Louisiana'>Louisiana</option>
            <option value='Maine'>Maine</option>
            <option value='Maryland'>Maryland</option>
            <option value='Massachusetts'>Massachusetts</option>
            <option value='Michigan'>Michigan</option>
            <option value='Minnesota'>Minnesota</option>
            <option value='Mississippi'>Mississippi</option>
            <option value='Missouri'>Missouri</option>
            <option value='Montana'>Montana</option>
            <option value='Nebraska'>Nebraska</option>
            <option value='Nevada'>Nevada</option>
            <option value='New Hampshire'>New Hampshire</option>
            <option value='New Jersey'>New Jersey</option>
            <option value='New Mexico'>New Mexico</option>
            <option value='New York'>New York</option>
            <option value='North Carolina'>North Carolina</option>
            <option value='North Dakota'>North Dakota</option>
            <option value='Ohio'>Ohio</option>
            <option value='Oklahoma'>Oklahoma</option>
            <option value='Oregon'>Oregon</option>
            <option value='Pennsylvania'>Pennsylvania</option>
            <option value='Rhode Island'>Rhode Island</option>
            <option value='South Carolina'>South Carolina</option>
            <option value='South Dakota'>South Dakota</option>
            <option value='Tennessee'>Tennessee</option>
            <option value='Texas'>Texas</option>
            <option value='Utah'>Utah</option>
            <option value='Vermont'>Vermont</option>
            <option value='Virginia'>Virginia</option>
            <option value='Washington'>Washington</option>
            <option value='West Virginia'>West Virginia</option>
            <option value='Wisconsin'>Wisconsin</option>
            <option value='Wyoming'>Wyoming </option>
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
          type="password"
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
      <button disabled={disabled}>submit</button>
      </InputFields>
    </FormStyler>
    </FormContainer>
  );
};

export default Form;
