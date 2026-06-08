
let n = 5
for (let i = 0; i < n; i++) {


    for (let j = i; j < n - 1; j++) {
        process.stdout.write(" ")
    }

    for (let j = 0; j <= i; j++) {
        process.stdout.write("* ")
    }

    for (let j = i; j < n - 1; j++) {
        process.stdout.write(" ")
    }

    console.log("\n")
}

