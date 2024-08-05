//learning the use of file system in java script
// we use require keyword to include a package
//fs filesystem
var a= require ('fs');
var o = require('os');
var user = o.userInfo();
console.log(user.username);
a.appendFile('greet.txt','hii'+user.username+'!\n',()=> {
    console.log('yo!'); 
})  
console.log(o);
