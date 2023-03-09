 console.log("Hello world !!");
 
 //-----------
 // variable
 //-----------

let nb = 18

// nb = "viki" => error deteceted

nb = 8

let nb2 = "viki"

let value: number | string

value = nb2

value = nb

// velue = true => error detected


 //-----------
// Array
 //-----------

let ar = [18, 8, 29]
 
ar = [7]

// ar = ["viki"]  => error detected

let arr2 = ["viki", 18]

arr2 = [18]

arr2 = ["hello"]

arr2 = [8, 29, 23, 1]

let array: (boolean | number)[] = []

// array = [{ nom: 34 }, false, 18] erroe

array = [4, true, 29]


//-----------
// Object interface
//-----------

interface Player { 
  pseudo : string
  age : number
  administrator: boolean
  equipements?: ({equip : string, nb: number} | null)[] 
}
interface PNJ {
  id: number
  pseudo: string
  interaction : boolean
}

//-----------
// Object
//-----------
 
const Vikito:Player = {
  pseudo: "Vikito",
  age: 33,
  administrator: true,
  equipements: [{ equip: "sword", nb: 2 }, { equip: "shield", nb: 1 }, { equip: "potions", nb: 10 }, { equip: "knife", nb: 5 }, {equip:"armor", nb:1}] 
}

const Pegi:Player = {
  pseudo: "Pegi",
  age: 18,
  administrator: false,
}

const Paul:PNJ = {
  id: 1,
  pseudo: "Paul",
  interaction : true
}

const Eric:PNJ = {
  id: 2,
  pseudo: "Eric",
  interaction : false
}

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
  firstName;
  lastName;
  pseudo;
  retired;
  position;


  constructor(lastName: string, retired: boolean, position: string | string[], firstName?: string, pseudo?: string ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.pseudo = pseudo;
    this.retired = retired;
    this.position = position
  }
}

const zidane = new Footballer("Zidane", true, "middleField", "Zinédine", "Zizou")
const ronaldinho = new Footballer("Ronaldino", true, ["middleField", "ForwardLeft"],"" , "Ronny")

console.log(zidane);
console.log(ronaldinho);
