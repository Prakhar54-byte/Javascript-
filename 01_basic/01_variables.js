const accountId=16796
let account_email="prakhar@kk.com"
var accountPassword="13599"
accountCity="Jaipur"
let accountState;


//accountId=33
/*
don't use var 
because of  issue in block scope and functional scope
*/

account_email="pp@kk.com"
accountPassword=58796
accountCity="Bhopal"

console.log(accountId);

console.table([accountId,accountPassword,account_email,accountCity,accountState])
