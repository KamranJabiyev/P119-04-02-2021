// function customFind(arr,callback){
//     let result;
//     for (const item of arr) {
//         if(callback(item)){
//             result=item;
//             break;
//         }   
//     }
//     return result;
// }

// let result=customFind([1,2,3,4,5],n=>n==5);
// console.log(result)

// console.log([1,2,3,4,5].find(n=>n==20))

// function customFilter(arr,callback){
//     let result=[];
//     for (const item of arr) {
//         if(callback(item)){
//             result.push(item);
//         }   
//     }
//     return result;
// }

// let result=customFilter([1,2,5,3,4,5],n=>n>3);
// console.log(result)

// function customForEach(arr,callback){
//     for (const item of arr) {
//         callback(item)
//     }
// }
// let arr=[1,2,3,4,5]
// arr.forEach(n=>console.log(n))
// customForEach(arr,n=>{
//     if(n%2==0) console.log(n)
// })

// alert("Hello");
// [1,2,3,4,5].forEach(n=>console.log(n))