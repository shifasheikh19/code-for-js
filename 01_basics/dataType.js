"use strict";
//alert(3+3) will give error,different syntax  in nodejs for console in browser this will and give alert
//mdn documetation refer
//original standard tc39.es
//datatype: number 2power53,bigint,string,boolean,null(standalone value),undefined (value not defined),symbol =>unique, 
//object

console.log(typeof "shifa")//its type is string
console.log(typeof undefined);//its type is undefined
console.log(typeof null);//its type is object

//possible question: undefined is a type in itself but null is an object
let score="33abc";
let scoreNumber=Number(score);
console.log(typeof(scoreNumber))//number
console.log(scoreNumber)//NaN
let a="";
let b=1;
let c="shifa";
console.log(Boolean(a));
console.log(Boolean(b));
console.log(Boolean(c));
let str1="hello";
let str2="shifa";
console.log(str1+str2);
//in production not use
console.log("1"+2);//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32
console.log(+true);//1 we are incrementing bolean so its converted to number and incremented but incrementation not done here
//console.log(true+);//error
//similarly
console(+"");//0 bcz "" gives false and incremented so conevrted to number but incremneted
let num1,num2,num3
num1=num2=num=2+1;
//complex ,should not use
let gameCounter=100
//gameCounter++; ++gameCounter




