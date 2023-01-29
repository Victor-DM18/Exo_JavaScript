fetch("http://localhost:3000/posts").then((res) => {
  res.json().then((data) => {
    for (i = 0; i < data.length; i++) {
      post.innerHTML += `<div id=box> <span id=pseudo>pseudo : ${data[i].pseudo}</span>     
      <span id=age> age : ${data[i].age}</span>
      <span id=message>message : ${data[i].message}</span></div>`;
    }
  });
});

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
  fetch("http://localhost:3000/posts", init).then((data) => {
    console.log("data envoyé");
  });
});
