// models/Book.ts
import { DataTypes, Model } from 'sequelize';
import conectionDB from '../database/conectionDB'; // Importa tu conexión a la base de datos

// Definición de los atributos de Book
interface CatAttributes {
  name: string;
  description: string;
  category: string;
  image: String;
  date : Date;
  likes : number;
}

// Extender la clase Model con los atributos de Book
class catMeme extends Model<CatAttributes> implements CatAttributes {
  public name!: string;
  public description!: string;
  public category!: string;
  public image! : string;
  public date! : Date;
  public likes! : number;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Definición del modelo con Sequelize
catMeme.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      image: {
        type : DataTypes.STRING,
        allowNull : false,
    },
     date: {
      type: DataTypes.DATE,
      allowNull : false
     },
     likes: {
      type : DataTypes.NUMBER,
      allowNull: false,
     }
    
  },
  {
    sequelize: conectionDB, // Tu conexión a la base de datos
    tableName: 'catarte',
  }
);

export default catMeme;
