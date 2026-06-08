const user = { name: "John", age: 28, city: "Bengaluru" };

console.log(user)


// object deconstruction

const { name, age } = user;

console.log(name);
console.log(age);


// object deconstruction using different name

const { name: userName, age: userAge } = user
console.log(userName)
console.log(userAge)