const { Router } = require("express");

const router = Router();

const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/post");

router.get("/users", getUsers);
router.get("/users/:userId", getUser);
router.post("/users", createUser);
router.put("/users/:userId", updateUser);
router.delete("/users/:userId", deleteUser);

router.get("/posts", getPosts);
router.get("/posts/:postId", getPost);
router.post("/posts", createPost);
router.put("/posts/:postId", updatePost);
router.delete("/posts/:postId", deletePost);

module.exports = router;
