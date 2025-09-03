import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  name: String,
  desc: String,
  isDone: Boolean
});

export const Todo = mongoose.model('Todo', TodoSchema )

