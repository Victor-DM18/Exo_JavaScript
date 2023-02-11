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

  this.getUser = function () {
    console.log(
      this.pseudo + " à " + this.age + " ans, et vient de " + this.from
    );
  };
}

const user_01 = new User("Vikito", 33, "gaming", "Paris", true);
const user_02 = new User("Pegi", 18, "cinema", "Amsterdam", false);

console.log("-----------------------------");
console.log("after constructor function : ");
console.log(user_01);

console.log("-----------------------------");
console.log("after method getUser : ");
console.log(user_01.getUser());
console.log(user_02.getUser());

// factory function

function User2(pseudo, age, hobby, from, admin) {
  return {
    pseudo,
    age,
    hobby,
    from,
    admin,
  };
}

const user03 = User2("fanta", 5, "sleep", "Chicago", false);
console.log("-----------------------------");
console.log("after factory function : ");
console.log(user03);

// class

class User3 {
  constructor(pseudo, age, hobby, from, admin) {
    this.pseudo = pseudo;
    this.age = age;
    this.hobby = hobby;
    this.from = from;
    this.admin = admin;
  }

  getUser3 = function () {
    console.log(
      this.pseudo + " à " + this.age + " ans, et vient de " + this.from
    );
  };
}

const user04 = new User3(
  "Dieu",
  33,
  "videur du paradie",
  "l'autre monde",
  true
);
console.log("-----------------------------");
console.log("with class : ");
console.log(user04);
console.log("-----------------------------");
console.log("with getUser3() function : ");
console.log(user04.getUser3());

// héritage

class Animals {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}

class Cat extends Animals {
  run() {
    console.log("le chat court");
  }
}

const kitty = new Cat("kitty", 2, "black");
console.log("-----------------------------");
console.log("en utilisant l'héritage : ");
console.log(kitty);
