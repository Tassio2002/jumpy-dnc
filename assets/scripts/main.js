const nameInput = document.querySelector("#name-input");
const requiredMessage = document.querySelectorAll(".required-message");
const submitBtn = document.querySelector("#submit-btn");
const inputs = document.querySelectorAll(".input-value");
const successMessage = document.querySelector("#show-message");

function verifyEmptyInputs() {
  let i = 0;

  requiredMessage.forEach((span) => {
    span.style.display = "none";
  });

  let fieldsFilled = 0

  inputs.forEach((input) => {
    input.value !== "" ? fieldsFilled++ : showRequiredMessage(i)
    
    fieldsFilled !== 5 ? null : showSuccessMessage()

    i++;
  });
}

function showRequiredMessage(inputIndex) {
  requiredMessage[inputIndex].style.display = "block";
}

function showSuccessMessage() {
  successMessage.style.display = "block";
}

submitBtn.addEventListener("click", verifyEmptyInputs);
