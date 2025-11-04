const expressInstance = require('express');
const { registerUser, logoutUser, loginUser } = require('../controllers/auth.controller');
const router = expressInstance.Router();


// GET - /api/auth/register - Register a new user
router.post("/register", registerUser);
// POST - /api/auth/login - Login a user
router.post("/login", loginUser);
// GET - /api/auth/logout - Logout a user
router.get("/logout", logoutUser);

module.exports = router;