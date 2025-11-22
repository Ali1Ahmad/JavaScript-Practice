let name = "Ali Ahmad"
const repoCount=20

// console.log(name+repoCount)    --> Not recomended

// console.log(`My name is ${name} and I have arround ${repoCount} of repositeries on the github account`)

// let value="ali ahmad"
// console.log(value.toUpperCase())
// console.log(value)


// console.log(name.charAt(2))
// console.log(name.indexOf('i'))

// const substring=name.substring(1,7)
// console.log(substring)

// const sampleString="Hello this is Ali"

// const slicedString=sampleString.slice(1,6)
// console.log(slicedString)

// const newString="     This is spaced    "
// console.log(newString)
// const trimedString=newString.trim()
// console.log(trimedString)

const url="https://aliahmad.com/ali%20ahmad"

const cleanedUrl=url.replace("%20","-")
console.log(cleanedUrl)

console.log(url.includes("butt"))

const splitedStringArray=url.split(" ")
console.log(splitedStringArray)