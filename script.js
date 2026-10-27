// class and Object
// oops 

// Promise----> managing future

// let ans=fetch("https://fakestoreapi.com/products")


// proise handlers

// ans
// .then((val)=> val.json())
// .then((data)=>console.log(data))
// .catch((val)=>{
//     console.log(error);
// })

// console.log(ans);

let userdata=async()=>{
    try {
        let res=await fetch("https://fakestoreapi.com/products")
        let data=await res.json();
        console.log(data);
    } catch (error) {
        console.log("errror in product api",error);
    }

};

userdata()