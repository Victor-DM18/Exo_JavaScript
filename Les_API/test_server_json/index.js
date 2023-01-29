const init = {
  method: "POTS",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "Alain",
    message: "I am a Goat",
    age: 38,
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:300/posts", init).then((data) => {
    console.log("data envoyé");
  });
});
