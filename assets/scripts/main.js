let nameInput = document.querySelector("#name-input");
let requiredMessage = document.querySelectorAll(".required-message");
let submitBtn = document.querySelector("#submit-btn");
let inputs = document.querySelectorAll(".input-value");

function verifyEmptyInputs() {
  requiredMessage.forEach((span) => {
    span.style.display = "none";
  });
  let i = 0;
  inputs.forEach((input) => {
    input.value !== "" ? null : showRequiredMessage(i);
    i++;
  });
}

function showRequiredMessage(inputIndex) {
  requiredMessage[inputIndex].style.display = "block";
}

submitBtn.addEventListener("click", verifyEmptyInputs);
