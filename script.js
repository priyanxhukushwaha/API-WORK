// class and Object
// oops 

// Promise----> managing future

let ans=fetch("https://fakestoreapi.com/products")

console.log(ans);

// proise handlers

ans
.then((val)=> val.json())
.then((data)=>console.log(data))
.catch((val)=>{
    console.log(error);
})