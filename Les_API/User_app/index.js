let users = [];

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24").then((res) =>
    res.json().then((data) => {
      users = data.results;
      console.log();
    })
  );
};

const displayUsers = async () => {
  await fetchUser();

  usersList.innerHTML = users
    .map(
      (user) => `
      <div id="list"> 
      <img src="${user.picture.large}"/>
      <h3>${user.name.first} ${user.name.last.toUpperCase()}</h3>
      <span>Sexe : ${user.gender}</span>
      <span>Âge : ${user.dob.age}</span>
      <span>Email : ${user.email}</span>
      <span>Tél : ${user.phone}</span>
      <span>Inscris depuis : ${user.registered.date.split("T")[0]}</span>
      </div>
    
    `
    )
    .join("");
};

displayUsers();
