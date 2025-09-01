const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
     
app.get('/blog', (req, res) => {
  res.send('Blog Post')
})


app.get('/blog/:slug', (req, res) => {

    //logic to fetch {slug} from the db
    // For URL:http://127.0.0.1:3000/Blog/intro-to-harshjagtap?mode=dark&region=in
    console.log(req.params) //will output { slug: 'intro-to-harshjagtap}
    console.log(req.query) //will output { mode: 'dark', region: 'in'}



  res.send(`hello ${req.params.slug}`)
})



//This makes our code non readable

// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('hello intro-to-js')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//   res.send('hello intro-to-python')
// })




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
