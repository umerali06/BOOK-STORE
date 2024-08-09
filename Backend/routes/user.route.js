import express from "express";
import { SignUpUsers, Login } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signUp", SignUpUsers);
router.post("/login", Login);

export default router;
