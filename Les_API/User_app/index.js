let users = [];

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24").then((res) =>
    res.json().then((data) => {
      users = data.results;
      console.log(users[1]);
    })
  );
};

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return newDate;
}

const displayUsers = async () => {
  await fetchUser();

  function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  }

  usersList.innerHTML = users
    .map(
      (user) => `
    <div id="list"> 
    <img src="${user.picture.large}"/>
    <h3>${user.name.first} ${user.name.last.toUpperCase()}</h3>
    <span>Sexe : ${user.gender == "male" ? "homme" : "femme"}</span>
    <span>Âge : ${user.dob.age} ans</span>
    <span>Email : ${user.email}</span> 
    <span>Vie à : ${user.location.city}, ${user.location.country}</span> 
    <span>Tél : ${user.phone}</span>
    <span>Inscris depuis le : ${dateParser(user.registered.date)}</span>
    </div>
    
    `
    )
    .join("");
};

displayUsers();
