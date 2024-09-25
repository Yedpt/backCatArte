import connectionDb from "./database/conectionDB";
import Book from "./models/catModel";

(async () => {
  try {
    await connectionDb.authenticate();
    console.log('Connection has been established successfully.');
    await Book.sync({ force: true });
    console.log('The table for the Book model was just re-created.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();