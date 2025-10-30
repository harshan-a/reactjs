import dotenv from "dotenv"
dotenv.config()

import express from "express"

import authRouter from "./routers/auth-router.js"

import errorHandler from "./middlewares/error-handler.js"
import notFound from "./middlewares/not-found.js"

const app = express()
const PORT = process.env.PORT || 5000

app.all("/", (req, res) => {
  console.log(req.cookies)
  res.send("hello")
})
app.get("/", (req, res) => {
  console.log(req.headers.host)
  res.send("hello")
})

app.use("/api/v1/auth/", authRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, (err) => {
  console.log("Server running on PORT " + PORT + "...")
})
