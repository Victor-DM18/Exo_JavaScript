fetch("http://localhost:3000/posts").then((res) => {
  res.json().then((data) => {
    for (i = 0; i < data.length; i++) {
      post.innerHTML += `<div id=box> <span>pseudo : ${data[i].pseudo}</span>
      <span> age : ${data[i].age}</span>
      <span>message : ${data[i].message}</span></div>`;
    }
  });
});

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "Alain",
    message: "I am a Goat",
    age: 38,
  }),
  mode: "cors",
  credentials: "same-origin",
};

form.addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() => {
    console.log("data envoyé");
  });
});
