var input = document.getElementById("quantidade")

var sorte = document.getElementById("sorte")

function sortear() {
    
    let maximo = 0
    
    let tempo = setInterval(function () {
        sorte.innerHTML = Math.floor(Math.random() * (1 + Number(input.value)))
        maximo++
        
        
        if (maximo == 20) {
        clearInterval(tempo)
    }
        
    },80)
    
    
    
}

function limpar() {
    sorte.innerHTML = ""
    input.value = ""
}








