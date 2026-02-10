import type { NextFunction, Request, Response } from "express"

export default function errorHandling(
  error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(500).send("Something went wrong, please try again later...")
}
