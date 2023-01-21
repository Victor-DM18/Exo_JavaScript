const form = document.querySelector(".form");
const list = document.getElementById("list");

const storage = () => {
  window.localStorage.todoList = list.innerHTML;
};

const getList = () => {
  list.innerHTML = window.localStorage.todoList;
};

getList();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${todo.value}</li>`;
  todo.value = "";
  storage();
});

list.addEventListener("click", (e) => {
  document.querySelector("span")
    ? e.target.remove()
    : (e.target.innerHTML += "<span> OK </span>");
  storage();
});
