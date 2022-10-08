const buttons = document.querySelectorAll(".btn");
const result = document.querySelector("h3");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    result.textContent += e.target.textContent;
  });
});

equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
  result.textContent = "";
});
