// CRUD Operations
use("CrudDb")

// CREATE
// db.createCollection("courses")

// db.courses.insertOne({
//     name:"Harsh's backend learning",
//     consistency:"100%",
//     efficiency:"30%",
//     projects:4
// })

    
// db.courses.insertMany([
//   {
//     name: "Harsh's backend learning",
//     consistency: "100%",
//     efficiency: "30%",
//     projects: 4
//   },
//   {
//     name: "Rohan's frontend grind",
//     consistency: "90%",
//     efficiency: "45%",
//     projects: 3
//   },
//   {
//     name: "Mohan's DSA prep",
//     consistency: "80%",
//     efficiency: "60%",
//     projects: 2
//   },
//   {
//     name: "Soham's React journey",
//     consistency: "95%",
//     efficiency: "55%",
//     projects: 5
//   },
//   {
//     name: "Aarav's Next.js practice",
//     consistency: "85%",
//     efficiency: "50%",
//     projects: 4
//   },
//   {
//     name: "Vihaan's Node.js focus",
//     consistency: "75%",
//     efficiency: "40%",
//     projects: 2
//   },
//   {
//     name: "Kabir's MongoDB work",
//     consistency: "92%",
//     efficiency: "65%",
//     projects: 6
//   },
//   {
//     name: "Aditya's DevOps start",
//     consistency: "70%",
//     efficiency: "35%",
//     projects: 1
//   },
//   {
//     name: "Raj's Portfolio building",
//     consistency: "88%",
//     efficiency: "48%",
//     projects: 3
//   },
//   {
//     name: "Harsh's Freelance push",
//     consistency: "100%",
//     efficiency: "75%",
//     projects: 7
//   }
// ]
// )

// // READ
// let a=db.courses.find({projects:4})

// console.log(a.toArray())


// let b=db.courses.find({projects:1})

// console.log(b)


// UPDATE- 

db.courses.updateOne({projects:4
}, {$set:{projects: 100}})

db.courses.updateMany({projects:4
}, {$set:{projects: 1000}})

// DELETE

db.courses.deleteMany({projects:1000})
