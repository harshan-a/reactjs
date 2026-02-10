import type { NextFunction, Request, Response } from "express";
import User from "../models/userModel.js"

export async function checkEmailExists(req: Request, res: Response, next: NextFunction) {
  const { email } = req.params
  if (!email) 
    return res.sendStatus(404)
  
  const user = await User.findOne({ email })
  if (!user) 
    return res.sendStatus(404)

  res.sendStatus(200)
}