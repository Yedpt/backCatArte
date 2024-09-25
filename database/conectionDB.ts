import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

// Simular __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargar el archivo .env desde la raíz del proyecto
dotenv.config({ path: resolve(__dirname, '../.env') }); 


const connectionDb = new Sequelize( process.env.DB_NAME || '' , process.env.DB_USER || '' , process.env.DB_PASSWORD || '' , {
  host: process.env.DB_HOST ,
  dialect: 'mysql',
  port: Number(process.env.DB_PORT) || 3306,
  define: {
    timestamps: false,
  },
});

export default connectionDb;