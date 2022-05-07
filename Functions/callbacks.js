// function teste(cb) {
//     console.log("funcao teste");
//     console.log(cb)
//     cb();
// };

// function fn() {
//     console.log("funcao anonima de callback");
// }
// teste(fn);


const teste = function (cb) {
    console.log("funcao teste");
    console.log(cb);

    if(typeof cb === "function") {
        cb(30)    
    };
};

const fn = function (param) {
    console.log("funcao anonima de callback");
    console.log(param);
}
// fn(30)

teste(fn);