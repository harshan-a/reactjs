export default function errorHandler(err, req, res, next) {
  res.send("Something went wrong, try again later...")
}
