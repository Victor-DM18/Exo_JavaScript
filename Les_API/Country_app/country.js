// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

const dataFetch = async () => {
  await fetch("https://restcountries.com/v3.1/all").then((res) =>
    res.json().then((data) => console.log(data[0]))
  );
};

dataFetch();
