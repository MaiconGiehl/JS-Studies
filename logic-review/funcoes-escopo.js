let n = "global";

function mostraN() {
    let n  = "local";
    console.log("valor de n: " + n);

    if (true) {
        var n2 = "n2 dentro de if com let";
    }
    console.log(n2);
}
mostraN()

console.log("valor de n: " + n);

function fnExt() {

    let n = "n local na funcao fnExt";

    function fnInt(){
        let n = "n local da funcao fnInt";
        console.log(n);
    }
    console.log(n);

    fnInt();
}

fnExt();