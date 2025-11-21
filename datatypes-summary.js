

// Data types ->   Primitive and Non-Primitive or Reference type

// (1) Primitive Data Types ----->  They are call by value ( changes are made in copy )
// *****Stack****** memory is used in the primitive data type
// string
// number
// boolean
// null
// undefined
// symbol
// BigInt

// (1) Non-Primitive Data Types ----->  They are call by Reference
// Array
// Objects
// Functions


const score=100;
const score_value=0.3;
const is_login=true;
const outside_temp=null;

let user_email;

const id =Symbol("123")
const another_id =Symbol("123")

// if(id==another_id)
// {
//     console.log("Both ids are same")
// }
// else{
//     console.log("Both ids are different")
// }

const super_heros=["Superman","batman","spiderman"]

// console.log(super_heros)

let myObj={
    name:"Ali Ahmad",
    age:22
}

// console.log(myObj)

const myFunction=function()
{
    console.log("Hello World !")
}

console.log(myFunction)