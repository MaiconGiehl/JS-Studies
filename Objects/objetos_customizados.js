
// OBJETOS CUSTOMIZADOS

// const task1 = {
//     name: "task2",
//     createdAt: new Date(),
//     updateAt: null,
//     completed: false
// };

// const task2 = {
//     name: "task 2",
//     createdAt: new Date(),
//     updateAt: null,
//     completed: false
// }

// task1.name = "task 1 updated"
// task1.updateAt = new Date()

// console.log(task1)
// console.log(task2)

function changeName(name) {
    this.name = name
    this.updatedAt = new Date()
}

const task1 = {
    name: "task 1",
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName
}

const task2 = {
    name: "task 2",
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName
}

task1.name = "task 1 updated"
task1.updatedAt = new Date()

task1.changeName("nome atualizado")

task2.changeName("novo nome")

console.log(task1)
console.log(task2)