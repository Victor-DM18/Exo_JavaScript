let users = [];

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24").then((res) =>
    res.json().then((data) => {
      users = data.results;
      console.log(users[1]);
    })
  );
};

const dateParser = (chaine) => {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return newDate;
};

const calculDay = (day) => {
  let today = new Date();
  let todayParse = Date.parse(today);
  let dayParse = Date.parse(day);
  let diff = Math.ceil((todayParse - dayParse) / 8.64e7);

  return diff;
};

const displayUsers = async () => {
  await fetchUser();

  usersList.innerHTML = users
    .map(
      (user) => `
    <div id="list"> 
    <img src="${user.picture.large}"/>
    <h3>${user.name.first} ${user.name.last.toUpperCase()}</h3>
    <span>Sexe : ${user.gender == "male" ? "homme" : "femme"}</span>
    <span>Né le  : ${dateParser(user.dob.date)}</span>
    <span>Email : ${user.email}</span> 
    <span>Vie à : ${user.location.city}, ${user.location.country}</span> 
    <span>Tél : ${user.phone}</span>
    <span>Inscris depuis ${calculDay(user.registered.date)} jours</span>
    </div>
    
    `
    )
    .join("");
};

displayUsers();
