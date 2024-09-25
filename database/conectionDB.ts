import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

const connectionDb = new Sequelize('catarte', 'root', process.env.DB_PASSWORD , {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

export default connectionDb;