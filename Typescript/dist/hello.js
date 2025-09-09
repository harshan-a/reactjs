console.log("Hello, world!!");
function greet(greet, date) {
    console.log(`${greet} - ${date}`);
}
greet("good morning", new Date());
const str = "hello";
const num = 1;
const isTrue = true;
const arr = [1];
function fun(...arg) {
    const [num, ...str] = arg;
    console.log(num);
    console.log(str);
}
fun(1, "hello", "hello1");
const obj = {
    name: "hello"
};
function fun1(url, method) {
}
const req = { url: "url", method: "GET" }; // as keyword is used for type assertion also known as type casting, explicitly tell compiler to treat the value as specific type
fun1(req.url, req.method);
let name1 = "1";
let num1 = name1;
console.log(num1++);
console.log(num1);
console.log(typeof num1);
const apiData = { name: "Alice", age: 25 };
const userName = apiData.name;
console.log(userName);
const obj2 = { name: "roshan", age: 20, address: { code: 12, city: 'new york' } };
console.log(obj2);
const obj3 = { name: "roshan", age: 20 };
console.log(obj3);
let person = {
    name: "Bob",
    age: 20,
    isStudent: true,
    address: {
        street: "street10",
        city: "london",
        country: "UK"
    }
};
let person1 = {
    name: "Charlie",
    age: 40,
    isStudent: false,
};
const people = [person, person1, ""];
console.log(people);
const users = [
    { username: "user1", role: "admin" },
    { username: "user2", role: "member" },
    { username: "user3", role: "guest" },
];
function fetchUserDetails(username) {
    const user = users.find(u => u.username === username);
    if (!user) {
        throw new Error("user not found");
    }
    return user;
}
export {};
//# sourceMappingURL=hello.js.map