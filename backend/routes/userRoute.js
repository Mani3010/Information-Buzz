import express from "express"
import { Login, Register, bookmark, follow, getMyProfile, getOtherUsers, logout, unfollow } from "../controllers/userController.js";
import isAunthenticated from "../config/auth.js";
const router=express.Router();
router.route("/register").post(Register);
router.route("/login").post(Login)
router.route("/logout").get(logout);
router.route("/bookmark/:id").put(isAunthenticated,bookmark)
router.route("/profile/:id").get(isAunthenticated,getMyProfile);
router.route("/otheruser/:id").get(isAunthenticated,getOtherUsers);
router.route("/follow/:id").post(isAunthenticated,follow);
router.route("/unfollow/:id").post(isAunthenticated,unfollow);
export default router;

