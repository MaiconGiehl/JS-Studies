let arr = [1, 3, 5, 7, 9]

let teste = arr.push(11,  13, true, "ola mundo")

console.log(teste)
console.log(arr)

console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")


let ultimoItem = arr.pop()
// let ultimoItem = arr[arr.length - 1]

console.log(ultimoItem)
console.log(arr)

console.log("BBBBBBBBBBBBBBBBBB")

let primeiroItem = arr.shift()
console.log(primeiroItem)
console.log(arr)


console.log("CCCCCCCCCCCCCCCCCCC")

let teste2 = arr.unshift(4,5,6)
console.log(teste2)
console.log(arr)

console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDD")

let arr2 = arr.slice(2, 4)
console.log(arr2)
console.log(arr)

console.log("EEEEEEEEEEEEEEEEEEEEE")

let arr3 = arr.splice(2, 4, "ola mundo", 10, 100, 1000)
console.log(arr)
console.log(arr3)