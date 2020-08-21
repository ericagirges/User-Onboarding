import React, { useState, useEffect } from "react";
import "../App.css";
import Form from "./Form";
import Users from "./Users";
import formSchema from "./validation/formSchema";
import axios from "axios";
import * as yup from "yup";

const initialFormValues = {
  fname: "",
  lname: "",
  location: "",
  email: "",
  password: "",
  // checkbox
  terms: false,
};

const initialFormErrors = {
  fname: "",
  lname: "",
  location: "",
  email: "",
  password: "",
};

const initialUsers = [];
const disableButton = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(disableButton);

  //put users in state
  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        console.log(response)
        // setUsers(response.data);
      })
      .catch((error) => {
        console.log("error", error)
        alert("Fetch users request failed.");
      });
  };

  // function to post new user data to API
  const postNewUsers = user => {
    axios
      .post("https://reqres.in/api/users", user)
      .then((response) => {
        setUsers([...users, response.data])
      })
      .catch((error) => {
        alert("User could not be added at this time");
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const updateInput = (name, value) => {
    console.log("name", name);
    //first validate input against requirements
    yup
      .reach(formSchema, name)
      .validate(value)
      // successful = remove error message
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      // unsuccessful = display error message by corresponding value
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    // update user values
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // function to update terms checkbox
  const updateCheckbox = (name, isChecked) => {
    setFormValues({
      ...formValues,
      [name]: isChecked,
    });
  };

  // upon submit
  const handleSubmit = () => {
    const newUser = {
      fname: formValues.fname.trim(),
      lname: formValues.lname.trim(),
      location: formValues.location,
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    //post new user data
    postNewUsers(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    formSchema.isValid(formValues)
      .then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Getting Started</h1>
      </header>
      <Form
        values={formValues}
        updateInput={updateInput}
        updateCheckbox={updateCheckbox}
        submit={handleSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <div className="display-users">
      <h2>Current Users</h2>
      {
        users.map(user => {
          return (
            <Users key={user.id} details={user}/>
          )
        })  
      }
      </div>
      
    </div>
  );
}

export default App;
