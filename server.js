// var notes=require('./file2.js'); //linking files mainly used for database creation
// var bheem=require("lodash");// function which has lots of inbuilt functionality
// var age =notes.age ;
// console.log(age);
// var result =notes.add(age,18);
// console.log(result);
// var data =["people","people",1,1,2,2,3,3,4,5];
// var name ="palak";
// var filter=bheem.uniq(data);
// console.log(filter);
// console.log(bheem);


// inter conversion json to an object in nodejs
const jsonS ='{"name": "jam","age:" 23,}';
const obj =JSON.parse(jsonS);
console.log(obj.name);
