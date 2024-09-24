import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

// Cargar el archivo .env desde la raíz del proyecto
dotenv.config(); 

// Definir la conexión a la base de datos con tipado
export const conectionDB: Sequelize = new Sequelize('book_app', 'root', process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: "mysql",
  define: { timestamps: false }
});

// Exportar la conexión como valor por defecto
export default conectionDB;
