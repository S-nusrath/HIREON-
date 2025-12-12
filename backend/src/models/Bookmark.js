import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";
import Job from "./Job.js";

const Bookmark = sequelize.define(
  "Bookmark",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    jobId: { type: DataTypes.INTEGER, allowNull: false }
  },
  {
    tableName: "bookmarks",
    timestamps: true
  }
);

// Associations
Bookmark.belongsTo(User, { foreignKey: "userId" });
Bookmark.belongsTo(Job, { foreignKey: "jobId" });

export default Bookmark;
