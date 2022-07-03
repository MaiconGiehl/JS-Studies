(function(){
    const nomeUsuario = null
    const elemento = document.querySelector(".top-bar p");

    if(nomeUsuario) {
    
        // document.getElementById("p1").textContent = "Bem Vindo, " + nomeUsuario;
        
        // document.querySelector(".top-bar p").textContent = "Bem-vindo(a)," + nomeUsuario;
        
        
        // elemento.textContent = elemento.textContent + nomeUsuario;
        // elemento.textCOntent += nomeUsuario;
        
        elemento.innerHTML += "<b>" + nomeUsuario; + "</b>"
    } else {
        // elemento.parentElement,style.display = "none"
        // elemento.remove()
        const elementoParaRemover = elemento.parentElement
        elementoParaRemover.parentElement.removeChild(elementoParaRemover)
    }

    console.log(elemento)
})()