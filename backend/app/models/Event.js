import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class Event extends Model {}

Event.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  place: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

}, {
  sequelize,
  tableName: 'events',
});

export default Event;
