import express from "express"

import {
  login,
  register,
  logout,
  checkUser,
} from "../controllers/auth-controller.js"

import { sendOTP } from "../controllers/otp-controller.js"

const router = express.Router()

router.route("/check-user").get(checkUser)
router.route("/login/").post(login)
router.post("/register", register)
router.get("/logout", logout)
router.get("/send-email", sendOTP)

export default router
