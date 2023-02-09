const obj = {
  pseudo: "vikito",
  age: 18,
  hobby: "coding",
  from: "Paris",
  color: "Black",
};

console.log(obj);

// Add
obj.job = "dev web";

console.log("-----------------------------");
console.log("after added :");
console.log(obj);

// Modify
obj.pseudo = "Pegi";

console.log("-----------------------------");
console.log("after modified :");
console.log(obj);

// Delete
delete obj.hobby;

console.log("-----------------------------");
console.log("after deleted :");
console.log(obj);

//Checked
console.log("-----------------------------");
console.log("for checking : ");
console.log("pseudo" in obj, "language" in obj);

// Browse an object
console.log("-----------------------------");
console.log("browse an object : ");
for (const key in obj) {
  console.log(key + " : " + obj[key]);
}

//Méthode native en JS

//Obtenir les keys
const key = Object.keys(obj);

console.log("-----------------------------");
console.log("method.Object.keys() : ");
console.log(key);

//Obtenir les keys
const value = Object.values(obj);

console.log("-----------------------------");
console.log("method Object.values() : ");
console.log(value);

// Creer un tableau pour chaque éléments de l'objet
const entrie = Object.entries(obj);

console.log("-----------------------------");
console.log("method Object.entries() : ");
console.log(entrie);

// Fusion objects
const obj2 = {
  taille: "1m70",
  hair: "black",
  administrator: true,
};

const fusion = Object.assign({}, obj, obj2);
console.log("-----------------------------");
console.log("method Object.assign() : ");
console.log(fusion);

// empeche d'ajouter un élément
const ad = Object.seal(obj);

obj.hair = "69 du buissons dans la forêt";
obj.color = "orange";

console.log("-----------------------------");
console.log("method Object.seal() : ");
console.log(obj);

// Enpeche toutes les modifications
const modif = Object.freeze(obj);
obj.hair = "69 du buissons dans la forêt";
obj.color = "blue";

console.log("-----------------------------");
console.log("method Object.freeze() : ");
console.log(obj);

//--------------------
// CONSTRUCTEUR D'OBJET
//--------------------

// constructor function

function User(pseudo, age, hobby, from, admin) {
  this.pseudo = pseudo;
  this.age = age;
  this.hobby = hobby;
  this.from = from;
  this.admin = admin;
}

const user_01 = new User("Vikito", 33, "gaming", "Paris", true);

console.log("-----------------------------");
console.log("after constructor function : ");
console.log(user_01);
