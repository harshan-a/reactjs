class NotFound extends Error {
  constructor(msg) {
    super(msg)
    this.statusCode = 404
  }
}

export default NotFound
