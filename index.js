const {greet, users, PI} = require("npm-hello-dcarpioro")

console.log(greet(' David'));

console.log("PI ", PI)

users().then( 
  res => console.log("data", res)
)