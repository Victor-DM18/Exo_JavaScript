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
