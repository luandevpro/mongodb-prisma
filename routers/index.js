const { Router } = require("express");

const router = Router();

const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

router.get("/users", getUsers);
router.get("/users/:userId", getUser);
router.post("/users/create", createUser);
router.put("/users/:userId", updateUser);
router.delete("/users/:userId", deleteUser);

module.exports = router;
