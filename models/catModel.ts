import { DataTypes, Model, Optional } from 'sequelize';
import { conectionDB } from './database/conectionDB';


// Definir los atributos de Book
interface BookAttributes {
  id: number;
  titleBook: string;
  author: string;
  description: string;
}

// Definir los atributos opcionales para la creación
interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

// Crear el modelo del libro con Sequelize y TypeScript
class BookModel extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public id!: number;
  public titleBook!: string;
  public author!: string;
  public description!: string;
}

BookModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titleBook: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: conectionDB, // Con
  })