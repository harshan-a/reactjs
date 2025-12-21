import User from "../models/user-model.js"
import { NotFound, Unauthorized, BadRequest } from "../errors/index.js"
import { StatusCodes } from "http-status-codes"

export async function checkUser(req, res, next) {
  const { email } = req.query
  if (!email) throw new BadRequest("Email is required")

  let user = await User.findOne({ email })
  if (!user) throw new NotFound("User not found")

  user = user.toObject()
  delete user.password

  res
    .status(StatusCodes.OK)
    .json({ success: true, data: user, msg: "Valid user" })
}

export async function login(req, res, next) {
  const { email, password } = req.body

  let user = await User.findOne({ email }).select("+password")
  if (!user) throw new NotFound("User not found")

  if (!(await user.comparePassword(password)))
    throw new Unauthorized("Incorrect password")

  const token = user.generateToken()

  user = user.toObject()
  delete user.password

  res.status(StatusCodes.OK).json({
    success: true,
    data: user,
    msg: "User logged in successfully",
    token,
  })
}

export async function register(req, res, next) {
  let user = await User.create({ ...req.body })

  const token = user.generateToken()

  user = user.toObject()
  delete user.password

  res.status(StatusCodes.OK).json({
    success: true,
    data: user,
    msg: "User Registered successfully",
    token,
  })
}

export async function logout(req, res, next) {}
