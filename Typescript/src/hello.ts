console.log("Hello, world!!")

function greet(greet: string, date: Date) {
  console.log(`${greet} - ${date}`)
}
greet("good morning", new Date())

const str: string = "hello"
const num: number = 1
const isTrue: boolean = true

const arr: number[] = [1]

function fun(...arg: [number, ...string[]]) { // ...arg is called rest parameter it convert all arguments as array and store in arg;
  const [num, ...str] = arg
  console.log(num)
  console.log(str)

}
fun(1, "hello", "hello1")

const obj: {
  name: "hello"
} = {
  name: "hello"
}

function fun1(url: string, method: "GET" | "POST"){
}
const req = {url: "url", method: "GET" as "GET"} // as keyword is used for type assertion also known as type casting, explicitly tell compiler to treat the value as specific type
fun1(req.url, req.method)

let name1 = "1"
let num1 = name1 as unknown as number
console.log(num1++)
console.log(num1)
console.log(typeof num1)

const apiData: unknown = { name: "Alice", age: 25}
const userName: string = (apiData as {name: string}).name
console.log(userName)

interface Obj {
  name: string
  age: number
}
interface Obj {
  address: {
    code: number
    city: string
  }
}

const obj2: Obj = {name: "roshan", age: 20, address: {code: 12, city: 'new york'}}
console.log(obj2)

type ObjType = {
  name: string
  age: number
}

const obj3: ObjType = {name: "roshan", age: 20}
console.log(obj3)

// type ObjType = {
  // address: {
  //     code: number
  //     city: string
  //   }
// }

type Person = {
  name: string
  age: number
  isStudent: boolean
  address?: Address
}

type Address = {
    street: string
    city: string
    country: string
  }

let person: Person = {
  name: "Bob",
  age: 20,
  isStudent: true,
  address: {
    street: "street10",
    city: "london",
    country: "UK"
  }
}

let person1: Person = {
  name: "Charlie",
  age: 40,
  isStudent: false,
}

const people: Array<Person | ""> = [person, person1, ""]
console.log(people)


type User = {
  id: number
  username: string
  role: UserRole
}
type UserRole = "guest" | "member" | "admin"
type Updates = Partial<User>

let nextUserId = 0

const users: User[] = [
  { id: nextUserId++, username: "user1", role: "admin" },
  { id: nextUserId++, username: "user2", role: "member" },
  { id: nextUserId++, username: "user3", role: "guest" },
]

function fetchUserDetails(username: string): User {
  const user = users.find(u => u.username === username)
  if(!user) {
    throw new Error("user not found")
  }
  return user
}

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = { id: nextUserId++, ...newUser}
  users.push(user)
  return user
}

addNewUser({username: "user4", role: "member"})

function updateUserDetails(id: number, updates: Updates) {
  const user = users.find(u => u.id === id)
  if(!user) return

  Object.assign(user, updates) // Object.assign(target, source1...n) => target object get modified based on the source object wit all existing property
}

updateUserDetails(1, {role: "admin"})

const gameScore = [14, 22, 35, 4, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper tetties"]
const voters = [{name: "Alice", age: 42}, {name: "Bob", age: 27}]

function getLastItem<Type>(array: Array<Type>): Type | undefined {
  return array[array.length - 1]
}

getLastItem(gameScore)
getLastItem(favoriteThings)
getLastItem(voters)