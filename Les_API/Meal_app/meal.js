// https://www.themealdb.com/api/json/v1/1/search.php?s=tomato

search.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = food.value;
  const fetchData = async () => {
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  fetchData();
});
