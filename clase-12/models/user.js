import { DataTypes } from 'sequelize';
import db from '../db.js';
import Role from './role.js';
import Task from './task.js';

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

User.Task = User.hasMany(Task);
Task.User = Task.belongsTo(User);
User.Role = User.belongsToMany(Role,{ through: "Roles_Users"});
Role.User = Role.belongsToMany(User, { through: "Roles_Users"});

export default User;