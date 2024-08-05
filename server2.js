// function call(){
//     console.log("this is a callback function. Successfully done!");
// }
const add2= function(a,b,call)
{
    var result = a+b;
    console.log("result =" +result);
    call();
}

// add2(3,4,function(){
//     console.log('add done');
// });
add2(2,3,() => console.log ('add done'));
// console.log("server file is running");
// function add(a,b)
// {
//     return a+b;
// }

// var result=add(134,99);
// console.log("the sum of two numbers is =" + result);
// (function()
// {
//     console.log("pihu is added");
// })();

