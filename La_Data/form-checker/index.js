//declare all the inputs
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  !valid
    ? (container.classList.add("error"), (span.textContent = message))
    : (container.classList.remove("error"), (span.textContent = message));
};

//confirm function for all the inputs
const nameCheck = (value) => {
  value.length > 0 && (value.length < 4 || value.length > 20)
    ? errorDisplay("name", "Le nom doit faire entre 3 et 20 caratères")
    : !value.match(/^[a-zA-Z0-9_.-]*$/)
    ? errorDisplay("name", "Un caractère n'est pas autorisé")
    : errorDisplay("name", "", true);
};

const emailCheck = (value) => {};

const pwdCheck = (value) => {};

const confirmCheck = (value) => {};

//events
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "name":
        nameCheck(e.target.value);
        break;
      case "email":
        emailCheck(e.target.value);
        break;
      case "password":
        pwdCheck(e.target.value);
        break;
      case "confirmation":
        confirmCheck(e.target.value);
      default:
        null;
    }
  });
});
