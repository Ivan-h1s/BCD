import { DataTypes } from 'sequelize';
import db from '../db.js';

const User = db.define('User', {
    'id': {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    'name': {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [3, 50],
                msg: 'Nombre invalido'
            }
        }
    },
    'lastName': {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [3, 50],
                msg: 'Apellido invalido'
            }
        }
    },
    'address': DataTypes.STRING,
    'email': {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Email invalido'
            }
        }
    },
});

export default User;