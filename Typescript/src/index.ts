// import { add } from "./add.js"

// console.log(add(1, 2))

type Pizza = {
  id: number
  name: string
  price: number
} 

type Menu = Pizza[]

type Order = {
  id: number
  pizza: Pizza
  status: "ordered" | "completed"
}

type OrderHistory = Order[]

let cashInRegister: number = 100
let nextOrderId: number = 0
let nextPizzaId = 0
const orderHistory: OrderHistory = []


const menu: Menu = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
]

// function addToArray<Type>(array: Array<Type>, item: Type): Type[] {
//   array.push(item)
//   return array
// }
// addToArray<Pizza>(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12})
// addToArray<Order>(orderHistory, {id: nextOrderId++, pizza: menu[0]!, status: "ordered"})


function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  // pizzaObj.id = nextPizzaId++
  const id = nextPizzaId++
  const newPizza: Pizza = {id, ...pizzaObj}
  menu.push(newPizza)
  return newPizza
}

function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if(typeof identifier === "string") {
    return menu.find(p => p.name.toLocaleLowerCase() === identifier.toLocaleLowerCase())

  } else if(typeof identifier === "number") {
    return menu.find(p => p.id === identifier)

  } else {
    throw new TypeError("Parameter 'identifier' must be either number or string")
  }
}
getPizzaDetail(1)

// type User<s, sa> = {
//   username: s
//   role: sa
// }
// const user: User<string, number> = {
//   username: 'hel',
//   role: 1
// }

function placeOrder(pizzaName: string): Order | undefined {
  const orderedPizza = menu.find(pizza => pizza.name === pizzaName)
  if(!orderedPizza) return 
  cashInRegister += orderedPizza.price
  // const newOrder = { id: nextOrderId++, pizza: orderedPizza, status: "ordered" } as const
  // const newOrder = { id: nextOrderId++, pizza: orderedPizza, status: "ordered" as "ordered" }
  const newOrder: Order = { id: nextOrderId++, pizza: orderedPizza, status: "ordered" }
  // newOrder.status = "ordered"
  orderHistory.push(newOrder)
  return newOrder
}

function completeOrder(orderId: number): Order | undefined {
  const order = orderHistory.find(order => order.id === orderId) // order is an reference of the object in array
  if(!order) return
  order.status = "completed"

  return order
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 10 })

placeOrder("Chicken Bacon Ranch")

completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order Queue:", orderHistory)