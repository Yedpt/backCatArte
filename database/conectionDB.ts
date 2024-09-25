import { Sequelize } from 'sequelize';

const connectionDb = new Sequelize('tiendita', 'root', '12345.', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

export default connectionDb;