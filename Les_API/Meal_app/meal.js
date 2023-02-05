// https://www.themealdb.com/api/json/v1/1/search.php?s=tomato

let recipies = [];
const fetchData = async (value) => {
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + value)
    .then((res) => res.json())
    .then((data) => (recipies = data.meals));
};

const displayMeal = () => {
  meal.innerHTML = recipies
    .map(
      (recipe) =>
        `
      <div id="recipe">
      <img src="${recipe.strMealThumb}"/>
      <h2>${recipe.strMeal}<h2>
      <span>${recipe.strIngredient1}</span>
      <span>${recipe.strIngredient2}</span>
      <span>${recipe.strIngredient3}</span>
      <span>${recipe.strIngredient4}</span>
      <span>${recipe.strIngredient5}</span>
      <span>${recipe.strIngredient6}</span>
      <span>${recipe.strIngredient7}</span>
      <span>${recipe.strIngredient8}</span>
      <span>${recipe.strIngredient9}</span>
      <span>${recipe.strIngredient10}</span>
      <span>${recipe.strIngredient11}</span>
      <span>${recipe.strIngredient12}</span>
      <span>${recipe.strIngredient13}</span>
      <span>${recipe.strIngredient14}</span>
      <span>${recipe.strIngredient15}</span>
      <span>${recipe.strIngredient16}</span>
      <span>${recipe.strIngredient17}</span>
      <span>${recipe.strIngredient18}</span>
      <span>${recipe.strIngredient19}</span>
      <span>${recipe.strIngredient20}</span>
      <span>${recipe.strIngredient21}</span>
      <span>${recipe.strIngredient22}</span>
      <span>${recipe.strIngredient23}</span>
      <span>${recipe.strIngredient24}</span>
      <span>${recipe.strIngredient25}</span>
      <span>${recipe.strIngredient26}</span>
      <span>${recipe.strIngredient27}</span>
      <span>${recipe.strIngredient28}</span>
      </div>
      `
    )
    .join("");
  console.log(recipies);
};

food.addEventListener("input", (e) => {
  fetchData(e.target.value);
});

search.addEventListener("submit", (e) => {
  e.preventDefault();
  displayMeal();
});
