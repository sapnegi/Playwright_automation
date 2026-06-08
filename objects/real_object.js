
let config = {}

config.browser = "chrome"
config.version = "v1.0"
config.testName = "test_01"

console.log(config)


//post deletion of testname field
delete config.testName
console.log(config)
