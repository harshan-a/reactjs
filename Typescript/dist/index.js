// import { add } from "./add.js"
let cashInRegister = 100;
let nextOrderId = 0;
let nextPizzaId = 0;
const orderHistory = [];
const menu = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function getPizzaDetail(identifier) {
    if (typeof identifier === "string") {
        return menu.find(p => p.name.toLocaleLowerCase() === identifier.toLocaleLowerCase());
    }
    else if (typeof identifier === "number") {
        return menu.find(p => p.id === identifier);
    }
    else {
        throw new TypeError("Parameter 'identifier' must be either number or string");
    }
}
getPizzaDetail(1);
// type User<s, sa> = {
//   username: s
//   role: sa
// }
// const user: User<string, number> = {
//   username: 'hel',
//   role: 1
// }
function placeOrder(pizzaName) {
    const orderedPizza = menu.find(pizza => pizza.name === pizzaName);
    if (!orderedPizza)
        return;
    cashInRegister += orderedPizza.price;
    // const newOrder = { id: nextOrderId++, pizza: orderedPizza, status: "ordered" } as const
    // const newOrder = { id: nextOrderId++, pizza: orderedPizza, status: "ordered" as "ordered" }
    const newOrder = { id: nextOrderId++, pizza: orderedPizza, status: "ordered" };
    // newOrder.status = "ordered"
    orderHistory.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    const order = orderHistory.find(order => order.id === orderId); // order is an reference of the object in array
    if (!order)
        return;
    order.status = "completed";
    return order;
}
addNewPizza({ id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: nextPizzaId++, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: nextPizzaId++, name: "Spicy Sausage", price: 10 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order Queue:", orderHistory);
export {};
//# sourceMappingURL=index.js.map