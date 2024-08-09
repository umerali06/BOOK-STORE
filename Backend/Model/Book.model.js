import mongoose from "mongoose";
// import _default from "styled-components/dist/utils/createWarnTooManyClasses";

const bookSchema = mongoose.Schema({
  name: String,
  title: String,
  category: String,
  prize: String,
  image: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
