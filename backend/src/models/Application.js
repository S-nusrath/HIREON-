import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";
import Job from "./Job.js";

const Application = sequelize.define("Application", {
  status: {
    type: DataTypes.STRING,
    defaultValue: "Applied",
  },
});

User.hasMany(Application);
Application.belongsTo(User);

Job.hasMany(Application);
Application.belongsTo(Job);

export default Application;
