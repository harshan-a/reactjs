const errorHandlerMiddlerware = (err, req, res, next) => {
  console.log(err)
  res.status(err.statusCode || 500).json({
    success: err.success || false,
    message: err.message || "Something error, please try again later",
    error: err,
  })
}

module.exports = errorHandlerMiddlerware
