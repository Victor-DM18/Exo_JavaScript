const form = document.querySelector(".form");
const list = document.getElementById("list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${todo.value}</li>`;
  todo.value = "";

  list.addEventListener("click", (e) => {
    e.target.remove();
  });
});
