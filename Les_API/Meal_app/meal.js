let recipies = [];

// fetch function async
const fetchData = async (value) => {
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + value)
    .then((res) => res.json())
    .then((data) => (recipies = data.meals));
  console.log(recipies);
};

//  diplay recipes function
const displayMeal = () => {
  if (recipies === null) {
    meal.innerHTML = '<h2 id="error">No result</h2>';
  }

  meal.innerHTML = recipies
    .map((recipe) => {
      let ingredients = [];

      for (i = 1; i < 21; i++) {
        if (recipe[`strIngredient${i}`]) {
          let ingredient = recipe[`strIngredient${i}`];
          let quantity = recipe[`strMeasure${i}`];

          ingredients.push(`<li>${ingredient} : ${quantity}</li>`);
        }
      }
      return `
        <div id="recipe">
        <img src="${recipe.strMealThumb}"/>
        <h1>${recipe.strMeal}</h1 >
        <ul>${ingredients.join("")}</ul>
        </div>
        `;
    })
    .join("");
};

// Input event
food.addEventListener("input", (e) => {
  fetchData(e.target.value);
});

// Submit event
search.addEventListener("submit", (e) => {
  e.preventDefault();
  displayMeal();
});
