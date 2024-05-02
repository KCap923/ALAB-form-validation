// alert("Cool Chicks Rise UP!!! ")

// Registration Form Validation

const registrationForm = document.getElementById ("registration");


// JS Form Validation
const registrationForm = document.getElementById["registration"];
const usernameInput = registrationForm.elements["username"];
const errorDisplay = document.getElementById["errorDisplay"];


const form = document.getElementById("form");
const name = document.elements["name"];

form.addEventListener('submit', validate);

function validate(evt) {
  const nameVal = validateName();
  if (nameVal === false) {
    evt.returnValue = false;
    return false;
  }

  alert(`Name: ${nameVal}
Email: ${emailVal}
Country: ${countryVal}
Zip Code: ${zipVal}
Password: ...that's a secret.`);

  return true;

}

function validateName() {
  if (name.value === '') {
    alert('Please provide a name.');
    name.focus();
    return false;
  }
  return name.value;
}


alert(`Name: ${nameVal}
Email: ${emailVal}
Country: ${countryVal}
Zip Code: ${zipVal}
Password: ...that's a secret.`);

  return true;





// // Error 
// function showMessage(message, isSuccess = false) {
//   errorDisplay.style.display = "block";
//   errorDisplay.textContent = message;
//   errorDisplay.style.backgroundColor = isSuccess ? "green" : "#fcc";
//   errorDisplay.style.color = isSuccess ? "#fff" : "red";
//   setTimeout(() => {
//     errorDisplay.style.display = "none";
//   }, 3000);
// }



function validate(evt) {
  const nameVal = validateName();
  if (nameVal === false) {
    evt.returnValue = false;
    return false;
  }

  const emailVal = validateEmail();
  if (emailVal === false) {
    evt.returnValue = false;
    return false;
  }

  const zipVal = validateZip();
  if (zipVal === false) {
    evt.returnValue = false;
    return false;
  }

  const countryVal = validateCountry();
  if (countryVal === false) {
    evt.returnValue = false;
    return false;
  }

  const passwordVal = validatePassword();
  if (passwordVal === false) {
    evt.returnValue = false;
    return false;
  }






  alert(`Name: ${nameVal}
  Email: ${emailVal}
  Country: ${countryVal}
  Zip Code: ${zipVal}
  Password: ...that's a secret.`);
  
    return true;

}


  


// Registration form - Username Validation
function validateUserName() {
  if (name.value === "") {
    alert("Please provide a name.");
    name.focus();
    return false;
  }
return name.value;
}

function alert(message) {
  const errorEl = document.getElementById("errorDisplay");
  errorEl.style.display = 'block';
  errorEl.textContent = message;

  setTimeout(() => {
    errorEl.style.display = 'none';
  }, 3000);
}