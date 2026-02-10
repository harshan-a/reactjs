import express from "express"
import { checkEmailExists } from "../controllers/user.js"

const router = express.Router()

router.get("/check/:email", checkEmailExists)

export default router
