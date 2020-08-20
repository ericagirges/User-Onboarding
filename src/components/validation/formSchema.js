import * as yup from "yup";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Must include email address"),
  fname: yup
    .string()
    .min(3, "Name must be at least 3 characters long")
    .required("First name is Required"),
  lname: yup
    .string()
    .min(3, "Name must be at least 3 characters long")
    .required("Last name is Required"),
  location: yup
    .string()
    .oneOf(
      [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New hampshire",
        "New jersey",
        "New mexico",
        "New york",
        "North carolina",
        "North dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode island",
        "South carolina",
        "South dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West virginia",
        "Wisconsin",
        "Wyoming",
      ],
      "You must select your location"
    )
    .required("You must select a loctaion"),
  password: yup
    .string()
    .min(8, "Password must be at least 3 characters long")
    .required("Password is Required"),
});

export default formSchema;
