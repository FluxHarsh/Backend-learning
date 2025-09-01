import fs from "fs/promises"

let a= await fs.readFile("Harsh.txt")
let b= await fs.appendFile("Harsh.txt", "\n\n\nthis is amazing promise")
console.log(a.toString(),b)