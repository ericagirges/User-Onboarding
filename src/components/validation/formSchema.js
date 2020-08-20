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
        "alabama",
        "alaska",
        "arizona",
        "arkansas",
        "california",
        "colorado",
        "connecticut",
        "delaware",
        "florida",
        "georgia",
        "hawaii",
        "idaho",
        "illinois",
        "indiana",
        "iowa",
        "kansas",
        "kentucky",
        "louisiana",
        "maine",
        "maryland",
        "massachusetts",
        "michigan",
        "minnesota",
        "mississippi",
        "missouri",
        "montana",
        "nebraska",
        "nevada",
        "new hampshire",
        "new jersey",
        "new mexico",
        "new york",
        "north carolina",
        "north dakota",
        "ohio",
        "oklahoma",
        "oregon",
        "pennsylvania",
        "rhode island",
        "south carolina",
        "south dakota",
        "tennessee",
        "texas",
        "utah",
        "vermont",
        "virginia",
        "washington",
        "west virginia",
        "wisconsin",
        "wyoming",
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
