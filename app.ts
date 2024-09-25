import connection_db from "./database/conectionDB";
import bookModel from "./models/catModel";

(async () => {
  try {
    await connection_db.authenticate();
    console.log('Connection has been established successfully mi loco.');
    await bookModel.sync({ force: true });
    console.log('The table for the user model was just re created');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
