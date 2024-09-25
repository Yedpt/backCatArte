import { Sequelize } from 'sequelize';

const connection_db: Sequelize = new Sequelize('tiendita', 'root', '12345.', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

export default connection_db;