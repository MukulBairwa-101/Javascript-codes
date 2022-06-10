//  Promises are  use to handle aysnchornous operations
// has 4 states  -----  fulfilled, rejected, pending,settled

let array = [ 4, 6 ,22,10,1];


let promise = new Promise((resolve, reject) =>{
    let found = array.find((value)=>value === 10);
    if(found){
        console.log(found);
        resolve(`value is found at ${array.indexOf(found)}` );
    }
    else reject('value is not found');




})

promise
.then((message)=>console.log(message,'success massage'))
.catch((message)=>console.log(message,'failed massage'));