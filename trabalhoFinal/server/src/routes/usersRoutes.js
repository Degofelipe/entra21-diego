const router = require("express").Router();
const { createUser } = require("../controllers/userControllers");
const usersControllers = require("../controllers/usersControllers");
const authentication = require("../middlewares/authMiddleware");

router.post("/", createUser);

router.get("/", authentication(["student", "teacher", "admin"], usersControllers.getUser));

module.exports = router;