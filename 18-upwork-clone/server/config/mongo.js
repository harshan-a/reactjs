import mongoose from "mongoose"

export default (baseUri) =>
  mongoose.connect(baseUri, {
    dbName: "db",
  })
