const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// Route to create a User
router.post("/user", UserController.create);

// Route to get a User
router.get("/user", UserController.getAll);

// Route to get User by Id
router.get("/user/:id", UserController.getById);

// Route to update an User
router.put("/user/:id", UserController.update);

// Route to delete an User
router.delete("/user/:id", UserController.delete);

module.exports = router;
