const accountId = 1125412
let accountEmail = "Pavan@gmail.com"
var accountPassword = "123456"
accountCity = "Vizag"
let accountState;

// accountId = 11 // not allowed

accountEmail =   "jsdjh@hjagd.com"
accountPassword = "212121"
accountCity =   "Jaipur"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functionals scopes
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])