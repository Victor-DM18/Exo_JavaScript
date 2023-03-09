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
    equipements: [null]
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
