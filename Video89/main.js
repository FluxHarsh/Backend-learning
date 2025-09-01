const express = require('express')
const blog=require('./routes/blog')
 
const app = express()
const port = 3000

app.use(express.static("public")) 
app.use('/blog',blog)



app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World2!')
}).post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World post!')
}).put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put !')
})


app.get("/about", (req, res) => {
    console.log("Hey its a about")
    res.sendFile('/Users/harshraghunathjagtap/Desktop/Harsh_Coding/BackEnd-CWH/Video89/templates/about.html')
})
app.get("/api", (req, res) => {
    console.log("Hey its a about")
    res.json({ a: 1, b: 2, c: 3 })
})

app.listen(port, () => {
    console.log(`Example hello app listening on port ${port}`)
})