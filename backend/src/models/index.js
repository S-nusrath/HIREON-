import User from "./User.js";
import Job from "./Job.js";
import Bookmark from "./Bookmark.js";

// associations
User.hasMany(Bookmark, { foreignKey: "userId" });
Bookmark.belongsTo(User, { foreignKey: "userId" });

Job.hasMany(Bookmark, { foreignKey: "jobId" });
Bookmark.belongsTo(Job, { foreignKey: "jobId" });

export { User, Job, Bookmark };
