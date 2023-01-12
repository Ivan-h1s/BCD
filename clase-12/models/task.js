import { DataTypes } from "sequelize";
import db from "../db.js";

const Tasks = db.define("Tasks", {
    "id": {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    "name": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "descripcion": DataTypes.STRING,
    "estado": DataTypes.ENUM("creado", "en proceso", "finalizado")
});

export default Tasks;