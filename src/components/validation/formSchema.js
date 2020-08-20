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
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
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
  terms: yup
    .boolean()
    .oneOf([true], "Please read and agree to the Terms of Service"),
});

export default formSchema;
