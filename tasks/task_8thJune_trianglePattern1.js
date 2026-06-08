let k = 5
for (let i = 1; i <= 5; i++) {
    for (let j = k; j > 0; j--) {
        process.stdout.write("*")
    }
    k -= 1
    console.log("\n")
}

