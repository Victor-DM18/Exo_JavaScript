const numbers = document.querySelectorAll(".nb");
const result = document.querySelector("h3");

numbers.forEach((nb) => {
  nb.addEventListener("click", (e) => {
    result.textContent = e.target.textContent;
    console.log(e.target.textContent);
  });
});
