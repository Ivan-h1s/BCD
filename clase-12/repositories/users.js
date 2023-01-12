import User from "../models/user.js";
import Role from "../models/role.js";
import Tasks from "../models/task.js";
import roleRepository from "./roles.js";
//import { createUserTask } from "../controllers/users.js";

const createUser = async (userData) => {
    try {
        const user = await User.create(userData);
        const role = await roleRepository.getRoleById(userData.roleId);

        await user.addRole(role);
        return user; 
    } catch (error) {
        return error;
    }    
}

const getAllUsers = async () => {
    const users = await User.findAll();
    return users;
}

const getUserById = async (userId) => {
    const user = await User.findByPk(userId, {
        include: Role
    });
    return user;
}

const updateUser = async(userData, userId) => {
    try {
        await User.update(userData, {
            where: {
                id: userId,
            }
        })
        const user = await User.findByPk(userId);
        return user;
    } catch (error) {
        return error;
    }
}

const deleteUser = async(userId) => {
    try {
        const user = await User.destroy({
            where: {
                id: userId
            }
        })
        return user;
    } catch (error) {
        return error;
    }
}

const createUserTasks = async (taskData, userId) => {
    const tasks = await Tasks.create({...taskData, UserId: userId});
    return tasks;
};

const getAllUserTasksById = async (userId) => {
    const user = await User.findByPk(userId, {
        include: {
            model: Tasks,
        }
    });
    return user;
}

export default {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUserTasks,
    getAllUserTasksById
};