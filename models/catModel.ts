import conectionDb from "../database/conectionDB";
import { DataTypes, Model, Optional } from "sequelize";

// Definimos una interfaz para los atributos del modelo
interface BookAttributes {
  bookTitle: string;
  authorName: string;
  bookDescription: string;
}

// Definimos una interfaz para los atributos opcionales del modelo
interface BookCreationAttributes extends Optional<BookAttributes, 'bookDescription'> {}

// Definimos la clase del modelo
class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public bookTitle!: string;
  public authorName!: string;
  public bookDescription!: string;
}

const bookModel = conectionDb.define<Book>(
  'Book',
  {
    // Model attributes are defined here
    bookTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false
  },
);

export default bookModel;