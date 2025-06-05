function callUsername(username){
    if(!username){
        console.log("pleaese enter valid username");
        return;
    }
    return `${username}`;
    
}
callUsername("shifa");//no return because it returns then what to show returned value we need to do console.log()
console.log(callUsername());
