const inputs = document.querySelectorAll(
  'input[type="text"], input[type="number"]'
);

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
    pseudo: pseudoText.textContent,
    message: message.textContent,
    age: age.textContent,
  }),
  mode: "cors",
  credentials: "same-origin",
};

form.addEventListener("submit", (e) => {
  if (
    pseudoText.textContent !== "" &&
    message.textContent !== "" &&
    age.textContent !== ""
  ) {
    fetch("http://localhost:3000/posts", init2).then((e) => {
      e.preventDefault();
      console.log("data envoyé");
    });
  } else {
    alert("erreur formulaire !!");
  }
});

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudoText":
        break;
      case "message":
        break;
      case "age":
        break;
    }
  });
});
