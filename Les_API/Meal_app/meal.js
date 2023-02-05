// https://www.themealdb.com/api/json/v1/1/search.php?s=tomato

let recipies = [];
const fetchData = async (value) => {
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + value)
    .then((res) => res.json())
    .then((data) => (recipies = data.meals));
  console.log(recipies);
};

const displayMeal = () => {
  if (recipies === null) {
    meal.innerHTML = '<h2 id="error">No result</h2>';
  }

  meal.innerHTML = recipies
    .map(
      (recipe) =>
        `
      <div id="recipe">
      <img src="${recipe.strMealThumb}"/>
      <h2>${recipe.strMeal}</h2>
      <li ="list">
      <ul>${recipe.strIngredient1}</ul>
      <ul>${recipe.strIngredient2}</ul>
      <ul>${recipe.strIngredient3}</ul>
      <ul>${recipe.strIngredient4}</ul>
      <ul>${recipe.strIngredient5}</ul>
      <ul>${recipe.strIngredient6}</ul>
      <ul>${recipe.strIngredient7}</ul>
      <ul>${recipe.strIngredient8}</ul>
      <ul>${recipe.strIngredient9}</ul>
      <ul>${recipe.strIngredient10}</ul>
      <ul>${recipe.strIngredient11}</ul>
      <ul>${recipe.strIngredient12}</ul>
      <ul>${recipe.strIngredient13}</ul>
      <ul>${recipe.strIngredient14}</ul>
      <ul>${recipe.strIngredient15}</ul>
      <ul>${recipe.strIngredient16}</ul>
      <ul>${recipe.strIngredient17}</ul>
      <ul>${recipe.strIngredient18}</ul>
      <ul>${recipe.strIngredient19}</ul>
      <ul>${recipe.strIngredient20}</ul>
      <ul>${recipe.strIngredient21}</ul>
      <ul>${recipe.strIngredient22}</ul>
      <ul>${recipe.strIngredient23}</ul>
      <ul>${recipe.strIngredient24}</ul>
      <ul>${recipe.strIngredient25}</ul>
      <ul>${recipe.strIngredient26}</ul>
      <ul>${recipe.strIngredient27}</ul>
      <ul>${recipe.strIngredient28}</ul>
      </li>
      </div>
      `
    )
    .join("");
};

food.addEventListener("input", (e) => {
  fetchData(e.target.value);
});

search.addEventListener("submit", (e) => {
  e.preventDefault();
  displayMeal();
});
