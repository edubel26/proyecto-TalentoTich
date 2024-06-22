
function cambiarTamanoLogo(tamanio){
    var logo = document.getElementById("logo")
    var tamanioLogo = 0
    var anchoLogo = 0
    if(tamanio == "pequeno"){
        tamanioLogo = "200px"
        anchoLogo = "100px"
    }else if(tamanio == "mediano"){
        tamanioLogo = "300px"
        anchoLogo = "200px"
    }else if(tamanio == "grande"){
        tamanioLogo = "400px"
        anchoLogo = "300px"
    }

    logo.style.width = tamanioLogo
    logo.style.height = anchoLogo

}

