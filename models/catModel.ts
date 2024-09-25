import connectionDb from "../database/conectionDB";
import { DataTypes, Model, Optional } from "sequelize";

interface BookAttributes {
  id: number;
  bookTitle: string;
  authorName: string;
  bookDescription: string;
}

interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public id!: number;
  public bookTitle!: string;
  public authorName!: string;
  public bookDescription!: string;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
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
    },
  },
  {
    sequelize: connectionDb,
    tableName: 'Books',
    timestamps: false,
  }
);

export default Book;