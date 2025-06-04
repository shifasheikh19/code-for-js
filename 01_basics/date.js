// const myDate=new Date();
// console.log(myDate);
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// const myDate=new Date(2025,0,13);
// console.log(myDate)
// const myDate=new Date("2025-11-13");
// console.log(myDate)
// let myTimeStamp=Date.now();//milisecond 1 jan 1970
// console.log(myTimeStamp);
// const myDate=new Date();
// console.log(myDate.getTime());
// const myDate1=new Date();
// console.log(myDate1.getTime());
let myDate=new Date();
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));
// let h=myDate.getHours();
// let m=myDate.getMinutes();
// let s=myDate.getSeconds();
// console.log(`time is ${h}:${m}:${s}`)
console.log(myDate.toLocaleDateString('default',{
    weekday:"long"
}))



