const nomeDinamico = document.querySelector('.nome-dinamico')

function digitacao (texto, contador) {
    if(contador < texto.length){
        setTimeout(() => {
            nomeDinamico.textContent += texto.charAt(contador)
            contador++
            digitacao(texto, contador)
        }, 90)
    }
}

digitacao('Ernesto Neto', 0)
