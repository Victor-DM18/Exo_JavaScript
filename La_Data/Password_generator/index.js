const range = document.querySelector(".range");
const submit = document.getElementById("display-pwd");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const pwd = document.getElementById("password");

const lower = "qwertyuiopasdfghjklzxcvbnm";
const upper = lower.toUpperCase();
const numbers = "1234567890";
const symbols = "!?-&$%@§<>=+_";

const generator = () => {
  let data = [];
  let password = "";

  lowercase.checked ? data.push(...lower) : null;
  uppercase.checked ? data.push(...upper) : null;
  number.checked ? data.push(...numbers) : null;
  symbol.checked ? data.push(...symbols) : null;

  if (data.length === 0) {
    alert("Aucuns critères sélectionnés");
    return;
  }

  for (i = 0; i < range.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  pwd.value = password;
  pwd.select();
  document.execCommand("copy ");

  submit.textContent = "mot de passe copié !";

  setTimeout(() => {
    submit.textContent = "Génerer mot de passe";
  }, 1000);
};

submit.addEventListener("click", generator);
