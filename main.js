/** @format */

const inputEmail = document.getElementById("input-email");
const buttonSubmit = document.getElementById("btn-submit");
const error = document.querySelector(".error");

const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const VALID_BORDER_COLOR = "hsl(223, 100%, 88%)";
const ERROR_BORDER_COLOR = "hsl(354, 100%, 66%)";

function isValidEmail(email) {
  return EMAIL_REGEX.test(email);
}

function showError() {
  inputEmail.style.borderColor = ERROR_BORDER_COLOR;
  error.style.visibility = "visible";
  error.style.margin = "4px 0px 16px";
}

function hideError() {
  inputEmail.style.borderColor = VALID_BORDER_COLOR;
  error.style.visibility = "hidden";
  error.style.margin = "0";
  inputEmail.value = "";
}

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const email = inputEmail.value;

  if (isValidEmail(email)) {
    hideError();
  } else {
    showError();
  }
});
