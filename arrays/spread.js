const arr = [1,2,3]
const arr2 = [4, 5, 6]

function sum(){
    console.log(arguments)
    console.log(arguments.length)
}

sum(1,2,3) //arguments.lenght = 3
sum(arr) // arguments.lenght = 1

sum(...[1,2,3])
sum(...arr)
sum([1,2,3])

// arr.push(arr2)
// console.log(arr3)


arr.push(...arr2)
console.log(arr)