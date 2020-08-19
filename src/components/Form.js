import React from "react";

const Form = (props) => {
  return (
    <form>
      <h2>User Registration</h2>

      <h4>General Information</h4>

      <label>
        Name&nbsp;
        <input
          // value={values.name}
          // onChange={onInputChange}
          name="name"
          type="text"
        />
      </label>
      <label>
        Email&nbsp;
        <input
          // value={values.username}
          // onChange={onInputChange}
          name="email"
          type="text"
        />
      </label>
      <label>
        Password&nbsp;
        <input
          // value={values.username}
          // onChange={onInputChange}
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
        //   checked={values.hobbies.hiking}
        //   onChange={onCheckboxChange}
        />
      </label>
      <div className="errors">
        {/* <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.terms}</div>  */}
      </div>
      <button>submit</button>
    </form>
  );
};

export default Form;
