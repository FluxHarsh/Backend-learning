import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js"; // import capitalized

let conn = await mongoose.connect("mongodb://localhost:27017/todo");
const app = express();
const port = 3000;

app.get('/', async (req, res) => { // add async
    const todoItem = new Todo({ // use different variable name
        name: "Hey first todo",
        desc: "Description of this todo",
        isDone: false
    });
    await todoItem.save(); // await save
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
