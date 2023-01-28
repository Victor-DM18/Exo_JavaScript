const displayJoke = () => {
  fetch("https://api.blablagues.net/?rub=blagues").then((res) => {
    res.json().then((data) => {
      const joke = data.data.content;

      head.textContent = joke.text_head;
      sub.textContent = joke.text !== "" ? joke.text : joke.text_hidden;
    });
  });
};

displayJoke();

document.body.addEventListener("click", displayJoke);
