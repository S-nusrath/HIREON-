/*import User from "./User.js";
import Job from "./Job.js";
import Bookmark from "./Bookmark.js";

// associations
User.hasMany(Bookmark, { foreignKey: "userId" });
Bookmark.belongsTo(User, { foreignKey: "userId" });

Job.hasMany(Bookmark, { foreignKey: "jobId" });
Bookmark.belongsTo(Job, { foreignKey: "jobId" });

export { User, Job, Bookmark };
*/
// models/index.js
/*import User from "./User.js";
import Job from "./Job.js";
import Bookmark from "./Bookmark.js";

// associations
User.hasMany(Bookmark, { foreignKey: "userId" });
Bookmark.belongsTo(User, { foreignKey: "userId" });

Job.hasMany(Bookmark, { foreignKey: "jobId" });
Bookmark.belongsTo(Job, { foreignKey: "jobId" });

export { User, Job, Bookmark };
*/
import Sequelize from "sequelize";
import sequelize from "../config/database.js";

import User from "./User.js";
import Job from "./Job.js";
import Bookmark from "./Bookmark.js";
import Connection from "./connection.model.js";
import ConnectionRequest from "./connectionRequest.model.js";

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// ✅ INIT CLASS-BASED MODELS
db.users = User;
db.jobs = Job;
db.bookmarks = Bookmark;

// ✅ INIT FUNCTION-RETURNED CLASS MODELS
db.connections = Connection(sequelize, Sequelize.DataTypes);
db.connection_requests = ConnectionRequest(
  sequelize,
  Sequelize.DataTypes
);

// ✅ ASSOCIATIONS
db.connection_requests.belongsTo(db.users, {
  foreignKey: "sender_id",
  as: "sender",
});

db.connection_requests.belongsTo(db.users, {
  foreignKey: "receiver_id",
  as: "receiver",
});

export default db;
