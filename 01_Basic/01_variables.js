const accountId = 124
let accountEmail = "samir@goggle.com"
var accountPassword = "dd#232@3"
accountCity = "Nagpur"
let accountState //not defined to any state

// accountId = 12 //can't change the const value
accountEmail = "samir@india.in"
accountPassword = "1221"
accountCity = "Mumbai" 

// simple way to print the values
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

//values to print into table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//prefer to use the let and const, don't use the var