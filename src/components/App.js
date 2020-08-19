import React from "react";
import "../App.css";
import Form from "./Form";
import formSchema from "./validation/formSchema";
import axios from "axios";
import * as yup from "yup";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  // checkbox
  terms: false,
}

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
}

const initialUsers = []


function App() {
  const [ users, setUsers ] = useState(initialUsers)
  const [ formValues, setFormvalues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)

  // Post new user data to API
  const postNewUsers = () => {
    axios.post("https://reqres.in/api/users")
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => {
        alert("User could not be added at this time")
      })
      .finally(() => {
        setFormvalues(initialFormValues)
      })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Getting Started</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
