const form = document.querySelector(".form");
const input = document.getElementById("todo");
const todos = document.querySelectorAll("span");
input.addEventListener("keypress", (e) => {
  e.preventDefault();
  console.log(e.key);
  if (e.key === "Enter") {
    const spans = form.appendChild(document.createElement("span"));
    spans.textContent = `- ${input.value}`;
    input.value = "";
  } else {
    input.value += e.key;
  }
});

todos.forEach((span) => {
  form.addEventListener("click", (e) => {
    e.target = span ? span.remove() : null;
    console.log(e.target);
  });
});
