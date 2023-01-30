const inputs = document.querySelectorAll(
  'input[type="text"], input[type="number"]'
);

let pseudoValue, ageValue, messageValue;

fetch("http://localhost:3000/posts").then((res) => {
  res.json().then((data) => {
    for (i = 0; i < data.length; i++) {
      post.innerHTML += `<div id=box> <span>pseudo : ${data[i].pseudo}</span>
      <span> age : ${data[i].age}</span>
      <span>message : ${data[i].message}</span></div>`;
    }
  });
});

const pseudoCheck = (value) => {
  pseudoValue = value;
};

const ageCheck = (value) => {
  ageValue = value;
};

const messageCheck = (value) => {
  messageValue = value;
};

//event

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudoText":
        pseudoCheck(e.target.value);
        break;
      case "message":
        messageCheck(e.target.value);
        break;
      case "age":
        ageCheck(e.target.value);
        break;
    }
  });
});

form.addEventListener("submit", (e) => {
  const init2 = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pseudo: pseudoValue,
      message: messageValue,
      age: ageValue,
    }),
    mode: "cors",
    credentials: "same-origin",
  };
  if (pseudoValue !== "" && messageValue !== "" && ageValue !== "") {
    fetch("http://localhost:3000/posts", init2).then((e) => {
      e.preventDefault();
      console.log("data envoyé");
    });
  } else {
    alert("erreur formulaire !!");
  }
});
