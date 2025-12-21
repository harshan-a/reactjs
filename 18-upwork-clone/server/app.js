// /*
import dotenv from "dotenv"
dotenv.config()

// import dependencies;
import express from "express"
import helmet from "helmet"
import cors from "cors"
import { xss } from "express-xss-sanitizer"
import cookieParser from "cookie-parser"

// import db connection and middlewares;
import connectDB from "./config/mongo.js"
import errorHandler from "./middlewares/error-handler.js"
import notFound from "./middlewares/not-found.js"

// import routes;
import authRouter from "./routers/auth-router.js"

// initialize app and port;
const app = express()
const PORT = process.env.PORT || 5000

// security middlewares;
app.use(helmet())
app.use(xss())
app.use(cors())

// parsing middleware;
app.use(cookieParser())
app.use(express.json())

// serving static files;

// main routes
app.use("/api/v1/auth", authRouter)

// error handling middlerwares;
app.use(notFound)
app.use(errorHandler)

try {
  await connectDB(process.env.MONGODB_BASE_URI)
  console.log("Database connected...")
  app.listen(PORT, (err) => {
    if (err) throw err
    console.log("Server running on PORT " + PORT + "...")
  })

  // even the server stops the mongodb database will kept connected for few seconds, so close the database connect when the server mannually stop by ctrl + c which is signal interrupt

  // process.on("SIGINT", async function () {
  //   // SIGINT - stands for signal interrupt
  //   // for default connection with mongoose.connect()
  //   // await mongoose.connection.close()

  //   // for multiple db connections must close each separatly
  //   // console.log(Object.values(dbsObject))

  //   await Promise.all(
  //     Object.values(dbsObject).map((db) => {
  //       // console.log(db)
  //       return db.close()
  //     })
  //   )
  //   console.log("Database connections closed")
  //   server.close()
  //   // process.exit(1)
  // })
} catch (err) {
  console.log(err)
}
// console.log(db1)
// */

//

// const array = [...Array(100000).keys()].map((i) => i + 1)
// const target = 10000000000

// // const array = [1, 2, 3, 4, 5, 6, 7, 8]

// // const target = 1

// let start = 0
// let end = array.length - 1

// // recursive
// function binarySearchRecursive(arr, target, start, end) {
//   if (start > end) return -1

//   const midIndex = Math.floor((start + end) / 2)

//   if (arr[midIndex] === target) return midIndex
//   else if (arr[midIndex] > target)
//     return binarySearchRecursive(arr, target, start, midIndex - 1)
//   else return binarySearchRecursive(arr, target, midIndex + 1, end)
// }

// // loop
// function binarySearchLoop(arr, target) {
//   let start = 0
//   let end = arr.length - 1

//   while (start <= end) {
//     let midIndex = Math.floor((start + end) / 2)
//     // console.log(start, end, midIndex)
//     if (arr[midIndex] === target) return midIndex
//     else if (arr[midIndex] > target) end = midIndex - 1
//     else start = midIndex + 1
//   }

//   return -1
// }

// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) if (arr[i] === target) return i
//   return -1
// }

// // console.time()
// // console.log(binarySearchLoop(array, target))
// // console.log(binarySearchRecursive(array, target, start, end))
// // console.log(linearSearch(array, target))
// // console.timeEnd()

// let mergeSortCount = 0
// let mergeCount = 0
// function mergeSort(arr) {
//   // O(n log n)
//   console.log("mergeSort: ", arr)
//   if (arr.length < 2) return arr

//   const midIndex = Math.floor(arr.length / 2) // O(log n)
//   const leftArr = arr.slice(0, midIndex)
//   const rightArr = arr.slice(midIndex, arr.length)

//   return merge(mergeSort(leftArr), mergeSort(rightArr)) // O(n)
// }
// function merge(leftArr, rightArr) {
//   // O(n)
//   console.log("merge: ", leftArr, rightArr)

//   const result = []

//   let leftIndex = 0
//   let rightIndex = 0
//   while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
//     // O(n)
//     if (leftArr[leftIndex] <= rightArr[rightIndex]) {
//       result.push(leftArr[leftIndex])
//       leftIndex++
//     } else {
//       result.push(rightArr[rightIndex])
//       rightIndex++
//     }
//   }

//   return result
//     .concat(leftArr.slice(leftIndex))
//     .concat(rightArr.slice(rightIndex))
// }

// // console.log(mergeSort([12, 12, 10, 1, 6, 8, 2, 8, 0]))

// function fibonacci(n) {
//   // O(2^n)
//   // console.log(n)
//   if (n === 0) return 0
//   if (n === 1) return 1
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }
// // console.log(fibonacci(5))

// let count = 0
// function f(n) {
//   // O(n!)
//   if (n === 0) return console.log("************* " + ++count)

//   for (let i = 0; i < n; i++) f(n - 1)
// }
// // f(3)
