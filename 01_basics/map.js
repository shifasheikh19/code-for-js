// const coding=["js","ruby","cpp","python"]
// const values=coding.forEach((items)=>{
//     console.log(items);
// })//does not return any value even if you write return item as aline it returns undefined
// console.log(values);
// const myNums=[1,2,3,4,5,6,7,8,9,10];

// console.log(myNums.filter((num)=>(
//     num>4

// )))
//can write direct function in filter as well or call function can see syntax if call outer function that retrn true or false it chgeck if it true then filter 


//do same as above it dose not return value but we can push and do things changes will be made
// const newNums=[]
// myNums.forEach((num)=>{
//         if(num>4){
//             newNums.push(num)
//         }
// })
// console.log(newNums);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    
// ];
// const userBooks=books.filter((bk)=>(
//     bk.genre==='History'

// ))
// console.log(userBooks);


const myNums=[1,2,3,4,5];
// console.log(myNums.map((num)=>(
//     num+10

// )))
// const newNums=[];
// myNums.forEach((num)=>(
//     newNums.push(num+10)
    
// ))
// console.log(newNums);
console.log(myNums.map((nums)=>(nums*10))
       .map((nums)=>(nums+1))
       .filter((nums)=>(nums>=40))
    )