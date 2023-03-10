"use strict";
console.log("Hello world !!");
//-----------
// variable
//-----------
let nb = 18;
// nb = "viki" => error deteceted
nb = 8;
let nb2 = "viki";
let value;
value = nb2;
value = nb;
// velue = true => error detected
//-----------
// Array
//-----------
let ar = [18, 8, 29];
ar = [7];
// ar = ["viki"]  => error detected
let arr2 = ["viki", 18];
arr2 = [18];
arr2 = ["hello"];
arr2 = [8, 29, 23, 1];
let array = [];
// array = [{ nom: 34 }, false, 18] erroe
array = [4, true, 29];
//-----------
// Object
//-----------
const Vikito = {
    pseudo: "Vikito",
    age: 33,
    administrator: true,
    equipements: [{ equip: "sword", nb: 2 }, { equip: "shield", nb: 1 }, { equip: "potions", nb: 10 }, { equip: "knife", nb: 5 }, { equip: "armor", nb: 1 }]
};
const Pegi = {
    pseudo: "Pegi",
    age: 18,
    administrator: false,
};
const Paul = {
    id: 1,
    pseudo: "Paul",
    interaction: true
};
const Eric = {
    id: 2,
    pseudo: "Eric",
    interaction: false
};
//Error detected 
// const Jean: PNJ = {
//   pseudo: "Jean"
//   age : 23
// }
console.log(Vikito);
console.log(Pegi);
//-----------
// Class
//-----------
class Footballer {
    constructor(lastName, retired, position, firstName, pseudo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.pseudo = pseudo;
        this.retired = retired;
        this.position = position;
    }
}
const zidane = new Footballer("Zidane", true, "middleField", "Zinédine", "Zizou");
const ronaldinho = new Footballer("Ronaldino", true, ["middleField", "ForwardLeft"], "", "Ronny");
console.log(zidane);
console.log(ronaldinho);
//-----------
// Function
//-----------
const hello = (pseudo, language, age, size) => {
    if (size) {
        console.log(`je m'appel ${pseudo}, je suis développeur ${language}, j'ai ${age} ans et je mesure ${size} cm`);
    }
    else {
        console.log(`je m'appel ${pseudo}, je suis développeur ${language}, et j'ai ${age} ans`);
    }
};
hello("Vikito", "JavaScript", 33, 170);
