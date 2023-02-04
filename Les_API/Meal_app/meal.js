// https://www.themealdb.com/api/json/v1/1/search.php?s=tomato
const fetchData = async () => {
  const value = food.value;
  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    .then((res) => res.json())
    .then((data) => {
      recipies = data.meals;
      console.log(recipies[0]);
    });
};

const displayMeal = async () => {
  await fetchData();

  meal.innerHTML = recipies.map(
    (recipe) =>
      `
      <spam>${recipe.strArea} ${recipe.strCategory}<span>
      `
  );
};

search.addEventListener("submit", (e) => {
  e.preventDefault();
  displayMeal();
});
