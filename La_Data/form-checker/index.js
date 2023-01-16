//declare all the inputs
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);
const progressBar = document.getElementById("progress-bar");

let pseudo, email, password, confirmPassword;

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  !valid
    ? (container.classList.add("error"),
      (span.textContent = message),
      container.classList.remove("good"))
    : (container.classList.add("good"),
      container.classList.remove("error"),
      (span.textContent = message));
};

//confirm function for all the inputs
const nameCheck = (value) => {
  value.length > 0 && (value.length < 4 || value.length > 20)
    ? (errorDisplay("name", "Le nom doit faire entre 3 et 20 caratères"),
      (pseudo = null))
    : !value.match(/^[a-zA-Z0-9_.-]*$/)
    ? (errorDisplay("name", "Un caractère n'est pas autorisé"), (pseudo = null))
    : (errorDisplay("name", "", true), (pseudo = value));
};

const emailCheck = (value) => {
  !value.match(/^[\w_.-]+@[\w.-]+\.[a-z]{2,4}$/i)
    ? (errorDisplay("email", "email invalide"), (email = null))
    : (errorDisplay("email", "", true), (email = value));
};

const pwdCheck = (value) => {
  !value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    ? (errorDisplay(
        "password",
        "Le mot de passe doit contenir au moins une minuscule, majuscule, chiffre et caractère spéciale"
      ),
      progressBar.classList.add("progressRed"),
      progressBar.classList.remove("progressYellow"),
      progressBar.classList.remove("progressGreen"),
      (password = null))
    : value.length >= 8 && value.length < 12
    ? (progressBar.classList.add("progressYellow"),
      progressBar.classList.remove("progressGreen", "progressRed"),
      errorDisplay("password", "Sécurité moyenne", true),
      (password = value))
    : value.length >= 12
    ? (progressBar.classList.add("progressGreen"),
      progressBar.classList.remove("progressYellow", "progressRed"),
      errorDisplay("password", "Sécurité bonne", true),
      (password = value))
    : null;
  console.log(value);
};

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
