const accountId=144553//constant,value cant be changed
let accountEmail="shifa@google.com"//scope problem solved
var accountPassword="2345"//scope problem arises ,issue in block scope and functional scope
accountCity="Nagpur"//can declare varible without use of let or const but should not use this method
let accountState;//if value not defined then its value is undefined,check in console


// accountId=2
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountState])//show table with multiple variable syntax:([])