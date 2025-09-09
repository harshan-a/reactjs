console.log("Hello, world!!");
function greet(greet, date) {
    console.log("".concat(greet, " - ").concat(date));
}
greet("good morning", new Date());
var str = "hello";
var num = 1;
var isTrue = true;
var arr = [1];
function fun() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var num = arg[0], str = arg.slice(1);
    console.log(num);
    console.log(str);
}
fun(1, "hello", "hello1");
var obj = {
    name: "hello"
};
function fun1(url, method) {
}
var req = { url: "url", method: "GET" }; // as keyword is used for type assertion also known as type casting, explicitly tell compiler to treat the value as specific type
fun1(req.url, req.method);
var name1 = "1";
var num1 = name1;
console.log(num1++);
console.log(num1);
console.log(typeof num1);
var apiData = { name: "Alice", age: 25 };
var userName = apiData.name;
console.log(userName);
var obj2 = { name: "roshan", age: 20, address: { code: 12, city: 'new york' } };
console.log(obj2);
var obj3 = { name: "roshan", age: 20 };
console.log(obj3);
var person = {
    name: "Bob",
    age: 20,
    isStudent: true,
    address: {
        street: "street10",
        city: "london",
        country: "UK"
    }
};
var person1 = {
    name: "Charlie",
    age: 40,
    isStudent: false,
    one: "1"
};
var people = [person, person1];
console.log(people);
