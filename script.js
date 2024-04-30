// alert("Cool Chicks Rise UP!!! ")


// JS Form Validation
const registrationForm = document.getElementById["registration"];
const usernameInput = registrationForm.elements["username"];
const errorDisplay = document.getElementById["errorDisplay"];

form.addEventListener('submit', validate);

// Error 
function showMessage(message, isSuccess = false) {
  errorDisplay.style.display = "block";
  errorDisplay.textContent = message;
  errorDisplay.style.backgroundColor = isSuccess ? "green" : "#fcc";
  errorDisplay.style.color = isSuccess ? "#fff" : "red";
  setTimeout(() => {
    errorDisplay.style.display = "none";
  }, 3000);
}

// Registration form - Username Validation


