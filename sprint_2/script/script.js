function emFoco(id, conteudo){
    var elemento = document.getElementById(id)
    if (elemento.value==conteudo){
        elemento.value = ''
    } 
}

function semFoco(conteudo){
    var elemento = document.getElementById(id)
    if (elemento.value=='') {
        elemento.value = conteudo
    } 
}