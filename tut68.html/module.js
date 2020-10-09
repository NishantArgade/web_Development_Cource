console.log('this is module')

// function average(arr) {
//   let  sum=0;
//     arr.forEach(element => {
//         sum+=element;
//     });
//     return sum/arr.length;
    
// }

// // module.exports=average;
// // module.exports={
// //     avg:average,
// //     name:'nishant',
// //     roll:03
// // }
// module.exports.name="nishant";
function sum(a,b){
    return a+b;
}

module.exports=sum;
