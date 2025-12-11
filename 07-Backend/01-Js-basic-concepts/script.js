// alert("Virat");

// Fundamental oF Javascript
// Arrays and Objects
// functions return
// async js coding

//------------------------------------------------Arrays--------------------------------------------------------------------------------------

// let arr = [1,2,3,4,"virat",{},true,function(){},false,[]];
// console.log(arr);

// Compulsary -> foreach, map, filter, find, indexOf

// -----------------------------------------------------

// foreach
let arr = [1, 2, 3, 4];

arr.forEach(function (val) {
  // val me har baar ek - ek value aayegi.
  // console.log(val + 2)
  console.log(val + " Virat");
});

// -----------------------------------------------------

// map  -> basically create a blank storage space. -> (diye huye array se ek array create karna ho tb use karte hian map)
let brr = [1, 2, 3, 4];

const newbrr = brr.map(function (val) {
  // return 10;  // return 10 4 times instead 1,2,3,4
  return val; // return all the value from the brr array.
});

console.log("Map :- ", newbrr);

// ---------------------------------------------------------------

// filter -> )same size ya phir given array se chhota array return karta hai filter)
let crr = [1, 2, 3, 4, 5, 6, 7, 8];

const newcrr = crr.filter(function (val) {
  if (val > 4) {
    return true;
  } else {
    return false;
  }
});

console.log("Filter :-", newcrr);

// ---------------------------------------------------

// find

let drr = [2,4,6,8,10,12,14]

const newdrr = drr.find(function(val){
    if(val === 18) {
        return val;
    } 
    // else {
    //     console.log("Value Array Me Nahi Hai");
    // }
})

console.log("Find :- ", newdrr);

// Another method 

// let drr = [2, 4, 6, 8, 10, 12, 14];

// const newdrr = drr.find(function (val) {
//   return val === 18;
// });

// if (!newdrr) {
//   console.log("Value Array Me Nahi Hai");
// }

// console.log("Find :- ", newdrr);



// -----------------------------------------------------
// IndexOf

let err = [1,2,3,4,5,6];

console.log(err.indexOf(1));
console.log(err.indexOf(6));
console.log(err.indexOf(4));
console.log(err.indexOf(10));  // -1 if value not find

// ------------------------------------------------Objects-----------------------------------------------------------------------------------


let obj = {
    name: "Virat",
    age: 18,
    weight: 56
}

console.log(obj.name);

// Object.freeze(obj);  // to freeze the obj values 

obj.age = 20; // check in console window


// ----------------------------------------------------Functions--------------------------------------------------------------------------

let frr = [1,2,3,4];
console.log("Array Length :- ", frr.length);


function abcd(a,b,c,d) {  // check in console :- abcd.length  -> (no of parameters = length)

}  


// -----------------------------------------Return-----------------------------

function xyz() {
    // return "Virat Rai"
    return 100
}

const out = xyz();
console.log(out);



// ----------------------------------------------------Async Js Coding----------------------------------------------------------------------


// Await ? -> to use await wo need async function.

// await fetch(`https://randomuser.me/api/`);

// -----------------------------------------Error------------------------------------------------

// let blob = await fetch(`https://randomuser.me/api/`);
// let res = await blob.json();

// console.log(res);
// ----------------------------------Inside Async Function-----------------------------------------

// (async () => {
//   let blob = await fetch(`https://randomuser.me/api/`);
//   let res = await blob.json();
//   console.log(res);
// })();
 
// Synchronous -> line by line code chalta hai 

// jo code Async nature ka ho , use side stack me bhej do ,
// ur baki  agla code chalao jo sync nature ka ho, jb sare sync code chal jaye,
// To check karo ki async code complete hua ya nahi and agar wo complete hua to usey main stack mein laao and chalao.




// bASIC  Overview
//  function pqr() {
//     await   
// }

// async function pqr() {
//     await   
// }



async function pqr() {
//   console.log("Start");
  let blob = await fetch(`https://randomuser.me/api/`);
  let ans = await blob.json();
  console.log(ans);
  console.log(ans.results[0]);
  console.log(ans.results[0].name);
//   console.log("End");
}

pqr();