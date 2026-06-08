// example 1

let a = {
    status: "pass"
}

let b = a
console.log(b.status)
console.log(b)

b.status = "fail"
console.log(a.status)


// example 2

let x = { status: "pass" }
let y = { status: "pass" }
if (x === y)
    console.log("true")
else
    console.log("false")