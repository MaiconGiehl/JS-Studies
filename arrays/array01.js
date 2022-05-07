const arr = [1, 5, 10, "ola", true]

// let sohNumeros = arr.every( function(el) {
//     return typeof el === "number";
// })

//every = se todas as vezes forem true
//some = se uma das vezes forem true

let sohNumeros = arr.some( function(el) {
    return typeof el === "number"
})

let arr1 = arr.filter(function (el, i, _arr) {
        return typeof el === "number"  
    })

arr1.forEach(function(el, i, _arr){
    console.log(el)
})

arr2 = arr1.map(function(el, i, _arr){
        return el * el;
})

console.log(arr)
console.log(arr1)
console.log(arr2)