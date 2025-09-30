const jwt = require("jsonwebtoken");
const userModel = require("../models/user.models");
async function authUser(req, res, next) {

    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user;
        next();
    }catch(err){
        return res.status(401).json({ message: "Unauthorized" });
    }
}

module.exports = authUser;