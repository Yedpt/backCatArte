// typescript

import db_connection from "../database/conectionDB.ts";
import { DataTypes } from "sequelize";

const catModel = db_connection.define(
    'back_catarte',
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
     TimeStamp: false
    },
  );
export default catModel;