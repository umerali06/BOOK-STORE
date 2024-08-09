import Book from "../Model/Book.model.js";

export const getBook = async (req, res) => {
  try {
    const Books = await Book.find();
    res.status(200).json(Books);
  } catch (error) {
    console.log("error:", error);
    res.status(500).json(error);
  }
};

export default getBook;
