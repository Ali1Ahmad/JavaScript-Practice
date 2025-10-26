"use strict"

const readlinesync=require("readline-sync")

const check_id=109085
const check_pass="12345"


let id =readlinesync.question("Please enter the id : ")
let pass =readlinesync.question("Please enter the password : ")

if (id!=check_id || pass!=check_pass)
{
    console.log("Wrong id or password! ","\n")
}

else
{
    console.log("Signed In Successfull Welcome !!!")
}