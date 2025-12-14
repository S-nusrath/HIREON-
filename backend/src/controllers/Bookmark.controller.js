// import Bookmark from "../models/Bookmark.js";
// import Job from "../models/Job.js";

// export const toggleBookmark = async (req, res) => {
//   try {
//     const { userId, jobId } = req.body;

//     const existing = await Bookmark.findOne({ where: { userId, jobId } });

//     if (existing) {
//       await existing.destroy();
//       return res.json({ message: "Bookmark removed" });
//     }

//     const bookmark = await Bookmark.create({ userId, jobId });
//     res.status(201).json({ message: "Bookmarked", bookmark });
//   } catch (err) {
//     res.status(500).json({ message: "Error", error: err.message });
//   }
// };

// export const getBookmarks = async (req, res) => {
//   try {
//     const userId = req.query.userId;

//     const bookmarks = await Bookmark.findAll({
//       where: { userId },
//       include: Job
//     });

//     res.json(bookmarks);
//   } catch (err) {
//     res.status(500).json({ message: "Error", error: err.message });
//   }
// };



import Bookmark from "../models/Bookmark.js";
import Job from "../models/Job.js";

export const toggleBookmark = async (req, res) => {
  try {
    const userId = req.user.id;
    const { jobId } = req.body;

    const existing = await Bookmark.findOne({ where: { userId, jobId } });

    if (existing) {
      await existing.destroy();
      return res.json({ message: "Bookmark removed" });
    }

    const bookmark = await Bookmark.create({ userId, jobId });
    res.status(201).json({ message: "Bookmarked", bookmark });
  } catch (err) {
    res.status(500).json({ message: "Error", error: err.message });
  }
};

export const getBookmarks = async (req, res) => {
  try {
    const userId = req.user.id;

    const bookmarks = await Bookmark.findAll({
      where: { userId },
      include: Job
    });

    res.json(bookmarks);
  } catch (err) {
    res.status(500).json({ message: "Error", error: err.message });
  }
};
