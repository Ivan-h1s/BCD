import { Router } from "express";
import { 
    createUser, 
    getAllUsers, 
    getUserById, 
    updateUser,
    deleteUser
} from "../controllers/users.js";

const userRoutes = Router();

userRoutes.post('/', createUser);
userRoutes.get('/', getAllUsers);
userRoutes.get('/:userId', getUserById);
userRoutes.put('/:userId', updateUser);
userRoutes.delete('/:userId', deleteUser);

export default userRoutes;