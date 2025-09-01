const fs=require("fs")

console.log("starting")

// fs.writeFileSync("Harsh.txt", "Harsh is a good boy")
fs.writeFile("Harsh2.txt", "Harsh is a 2 good boy", ()=>{
    console.log("done")
    fs.readFile("Harsh2.txt", (error,data)=>{
        console.log(error, data.toString())
    })
})


fs.appendFile("Harsh.txt","Harshaddinganewfile", (e, d) =>{
    console.log(d)
} )

console.log("ending")



fs.writeFile("log.txt","Server started", (error) =>{
    if (error) {
        console.error("Failed to write file:", error )
        return;
    }
    console.log("File created successfully");
} )
