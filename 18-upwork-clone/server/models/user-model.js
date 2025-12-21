import mongoose, { Schema } from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = new Schema({
  role: {
    type: String,
    required: [true, "Please, specify the user role"],
    enum: {
      values: ["admin", "client", "freelancer"],
      message: "Invalid role",
    },
  },
  firstName: {
    type: String,
    required: [true, "Please, provide first name"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please, provide last name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please, provide email"],
    trim: true,
    unique: true,
    index: true,
    match: [/^[a-z0-9.]+@[a-z]+\.?[a-z]+$/, "Invalid Email"],
  },
  password: {
    type: String,
    required: [true, "Please, provide password"],
    trim: true,
  },
  country: {
    type: String,
    requried: true,
    enum: {
      values: ["india"],
    },
  },
})

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10)

  this.password = await bcrypt.hash(this.password, salt)
  next()
})

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
}

userSchema.method({
  generateToken() {
    return jwt.sign(
      {
        userId: this._id,
        email: this.email,
        role: this.role,
      },
      process.env.JWT_SECERT_KEY
    )
  },
})

export default mongoose.model("User", userSchema)
