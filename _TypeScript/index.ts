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

// array = [{ nom: 34 }, false, 18] erroe detected

array = [4, true, 29]
