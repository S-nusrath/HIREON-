// import { DataTypes } from "sequelize";
// import sequelize from "../config/database.js";

// const User = sequelize.define("User", {
//   id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//   name: { type: DataTypes.STRING, allowNull: false },
//   email: { type: DataTypes.STRING, allowNull: false, unique: true },
//   password: { type: DataTypes.STRING, allowNull: false },
//   branch: { type: DataTypes.STRING, allowNull: true },
//   year: { type: DataTypes.STRING, allowNull: true }
// }, {
//   tableName: "users",
//   timestamps: true,
// });

// export default User;


import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  branch: {
    type: DataTypes.STRING,
    allowNull: true,   // ✅ FIX
  },
  year: {
    type: DataTypes.STRING,
    allowNull: true,   // ✅ FIX
  },
});

export default User;
