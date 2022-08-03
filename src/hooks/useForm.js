import { useState, useEffect } from "react";

const useForm = (callback) => {
  //prettier-ignore
  const initialValues = { firstName: "", secondName: "", email: "",
    streetName: "", streetNumber: "", city: "", province: "", state: "", zipCode: "",
  };
  const [address, setAddress] = useState(initialValues);
  console.log("ADDRESS");
  console.log(address);

  const handleArrowClick = (e) => {
    let x = 0;
    console.log(x);
    //first name
    const fnSpan = document.querySelector(".first-name-span ");
    const fnLng = address.firstName.length;

    if (fnLng === 0) {
      fnSpan.innerHTML = "We need you first name.";
      x++;
      console.log(x);
    }

    //second
    const snSpan = document.querySelector(".second-name-span ");
    const snLng = address.secondName.length;

    if (snLng === 0) {
      snSpan.innerHTML = "We need your second name.";
      x++;
      console.log(x);
    }

    //email
    const emailSpan = document.querySelector(".email-span ");
    const emailLng = address.email.length;

    if (emailLng === 0) {
      emailSpan.innerHTML = "We need your email.";
      x++;
      console.log(x);
    }

    //street
    const streetNameSpan = document.querySelector(".street-name-span ");
    const streetNameLng = address.streetName.length;
    const streetNumberSpan = document.querySelector(".street-number-span ");
    const streetNumberLng = address.streetNumber.length;

    if (streetNumberLng === 0 || streetNameLng === 0) {
      streetNameSpan.innerHTML = "We need your street + no.";
      x++;
      console.log(x);
    }

    //city
    const citySpan = document.querySelector(".city-span");
    const cityLng = address.city.length;

    if (cityLng === 0) {
      citySpan.innerHTML = "We need your city.";
      x++;
      console.log(x);
    }

    //state
    const stateSpan = document.querySelector(".state-span");
    const stateLng = address.state.length;

    if (stateLng === 0) {
      stateSpan.innerHTML = "We need your state.";
      x++;
      console.log(x);
    }

    //state
    const zipSpan = document.querySelector(".zip-code-span");
    const zipLng = address.zipCode.length;

    if (zipLng === 0) {
      zipSpan.innerHTML = "We need your Zip Code.";
      x++;
      console.log(x);
    }

    //prevent default
    if (x > 0) {
      e.preventDefault();
    }
  };

  //A method to handle form inputs
  const handleChange = (event) => {
    //setAddress
    let name = event.target.name;
    let val = event.target.value;

    setAddress({
      ...address,
      [name]: val,
    });
  };

  useEffect(() => {
    const validate = () => {
      //first name
      const fnSpan = document.querySelector(".first-name-span");
      const fnLng = address.firstName.length;

      if (fnLng > 0) {
        fnSpan.innerHTML = "";
      }

      //second name
      const snSpan = document.querySelector(".second-name-span ");
      const snLng = address.secondName.length;

      if (snLng > 0) {
        snSpan.innerHTML = "";
      }

      //street
      const streetNameSpan = document.querySelector(".street-name-span ");
      const streetNameLng = address.streetName.length;
      const streetNumberSpan = document.querySelector(".street-number-span ");
      const streetNumberLng = address.streetNumber.length;

      if (streetNumberLng === 0 && streetNameLng > 0) {
        streetNameSpan.innerHTML = "We also need street number.";
      }

      if (streetNumberLng > 0 && streetNameLng === 0) {
        streetNameSpan.innerHTML = "We also need street name.";
      }

      if (streetNumberLng > 0 && streetNameLng > 0) {
        streetNameSpan.innerHTML = "";
      }

      //email
      const emailSpan = document.querySelector(".email-span");
      const emailLng = address.email.length;
      const emailValue = address.email;

      const emailValid = !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(emailValue);

      if (emailValid && emailLng > 0) {
        emailSpan.innerHTML = "Enter valid email address.";
      } else if (!emailValid) {
        emailSpan.innerHTML = "";
      }

      //city
      const citySpan = document.querySelector(".city-span");
      const cityLng = address.city.length;

      if (cityLng > 0) {
        citySpan.innerHTML = "";
      }

      //state
      const stateSpan = document.querySelector(".state-span");
      const stateLng = address.state.length;

      if (stateLng > 0) {
        stateSpan.innerHTML = "";
      }

      //zip code
      const zipSpan = document.querySelector(".zip-code-span");
      const zipLng = address.zipCode.length;

      if (zipLng > 0) {
        zipSpan.innerHTML = "";
      }
    };
    validate(address);
  });

  return {
    address,
    handleChange,
    handleArrowClick,
  };
};

export default useForm;

//  //Errors
//  const [errors, setErrors] = useState(initialValues);
//  console.log("ERRORS");
//  console.log(errors);

// case "email":
//   if (
//     !new RegExp(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     ).test(value)
//   ) {
//     setErrors({
//       ...errors,
//       email: "Enter a valid email address",
//     });
//   } else {
//     let newObj = omit(errors, "email");
//     setErrors(newObj);
//   }
//   break;

// case "password":
//   if (
//     !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
//   ) {
//     setErrors({
//       ...errors,
//       password:
//         "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
//     });
//   } else {
//     let newObj = omit(errors, "password");
//     setErrors(newObj);
//   }
//   break;

// const validate = (event, name, value) => {
//   console.log("I am in validate");
//   console.log(address.firstName.length);
//   //A function to validate each input values

//   switch (name) {
//     case "address.firstName":
//       if (value === 0) {
//         console.log("first name is short");

//         setErrors({
//           ...errors,
//           firstName: "This field should not be empty.",
//         });
//       } else {
//         let newObj = omit(errors, "firstName");
//         setErrors(newObj);
//       }
//       break;

//     default:
//       break;
//   }
// };

// //To stop default events
// event.persist();

// validate(event, name, val);
// Let's set these values in state

// //first name
// const fnSpan = document.querySelector(".first-name-span");
// const fnLng = address.firstName.length;

// if (fnLng > 12) {
//   fnSpan.innerHTML = "We need 3-12 characters.";
// } else if (fnLng > 2) {
//   fnSpan.innerHTML = "";
// } else if (fnLng > 0) {
//   fnSpan.innerHTML = "We need 3-12 characters.";
// } else if (fnLng === 0) {
//   fnSpan.innerHTML = "";
// }

// //second name
// const snSpan = document.querySelector(".second-name-span");
// const snLng = address.secondName.length;

// if (snLng > 12) {
//   snSpan.innerHTML = "We need 2-12 characters.";
// } else if (snLng > 1) {
//   snSpan.innerHTML = "";
// } else if (snLng > 0) {
//   snSpan.innerHTML = "We need 2-12 characters.";
// } else if (snLng === 0) {
//   snSpan.innerHTML = "";
// }

//street name
// const streetNameSpan = document.querySelector(".street-name-span");
// const streetNameLng = address.streetName.length;

// if (streetNameLng > 16) {
//   streetNameSpan.innerHTML = "We need 2-16 characters.";
// } else if (streetNameLng > 1) {
//   streetNameSpan.innerHTML = "";
// } else if (streetNameLng > 0) {
//   streetNameSpan.innerHTML = "We need 2-16 characters.";
// } else if (streetNameLng === 0) {
//   streetNameSpan.innerHTML = "";
// }

// //street number
// const streetNumberSpan = document.querySelector(".street-number-span");
// const streetNumberLng = address.streetNumber.length;
// const streetNumberValue = address.streetNumber;
// const onlyDigits = /^[0-9]+$/.test(streetNumberValue);

// if (onlyDigits === false) {
//   streetNumberSpan.innerHTML = "Digits only";
// } else if (onlyDigits === true) {
//   streetNumberSpan.innerHTML = "";
// }

// if (streetNumberLng > 6) {
//   streetNumberSpan.innerHTML = "1-6 digits";
// } else if (streetNumberLng === 0) {
//   streetNumberSpan.innerHTML = "";
// }

// //city
// const townSpan = document.querySelector(".city-span");
// const townLng = address.city.length;

// if (townLng > 16) {
//   townSpan.innerHTML = "We need less than 16 characters.";
// } else if (townLng > 1) {
//   townSpan.innerHTML = "";
// } else if (townLng === 1) {
//   townSpan.innerHTML = "We need at least 2 characters.";
// } else if (townLng === 0) {
//   townSpan.innerHTML = "";
// }

// //city
// const stateSpan = document.querySelector(".state-span");
// const stateLng = address.state.length;

// if (stateLng > 16) {
//   stateSpan.innerHTML = "We need less than 16 characters.";
// } else if (stateLng > 1) {
//   stateSpan.innerHTML = "";
// } else if (stateLng === 1) {
//   stateSpan.innerHTML = "We need at least 2 characters.";
// } else if (stateLng === 0) {
//   stateSpan.innerHTML = "";
// }

// //state
// const citySpan = document.querySelector(".city-span");
// const cityLng = address.streetName.length;

// if (cityLng > 16) {
//   citySpan.innerHTML = "We need less than 16 characters.";
// } else if (cityLng === 1) {
//   streetNumberSpan.innerHTML = "We need at least 2 characters.";
// }

// //zip code
// const zipSpan = document.querySelector(".zip-code-span");
// const zipLng = address.zipCode.length;

// const onlyZipDigits = /^[0-9]+$/.test(address.zipCode);

// if (zipLng > 7) {
//   zipSpan.innerHTML = "We need 5-6 digits.";
// } else if (zipLng > 5) {
//   zipSpan.innerHTML = "";
// } else if (zipLng > 1) {
//   zipSpan.innerHTML = "We need 5-6 digits.";
// } else if (zipLng === 0) {
//   zipSpan.innerHTML = "";
// }

// if (onlyZipDigits === false) {
//   zipSpan.innerHTML = "Digits only";
// } else if (onlyZipDigits === true) {
//   zipSpan.innerHTML = "";
// }
