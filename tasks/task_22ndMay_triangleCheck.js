let a = 12
let b = 10
let c = 11

if (a === b && b === c && c === a) {
    console.log("triangle is equilateral")
}
else if (a === b || b === c || c === a) {
    console.log("triangle is isosceles")
}
else
    console.log("triangle is scalene")

