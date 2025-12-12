import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Job = sequelize.define(
  "Job",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    company: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    skills: { type: DataTypes.TEXT, allowNull: true },
    branchFilter: { type: DataTypes.STRING, allowNull: true },
    yearFilter: { type: DataTypes.STRING, allowNull: true },
    location: { type: DataTypes.STRING, allowNull: true },
    employmentType: { type: DataTypes.STRING, allowNull: true },
    postedBy: { type: DataTypes.INTEGER, allowNull: true }
  },
  {
    tableName: "jobs",
    timestamps: true
  }
);

export default Job;
