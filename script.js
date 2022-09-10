const textoEntrada = document.querySelector(".input-texto");
const textoSaida = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoEncriptado = encriptar(textoEntrada.value);
    textoSaida.value = textoEncriptado; 
    
    ocultar();

}


function ocultar() {
    document.getElementById("fundo").style.display = "none";
}




function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i=0; i< matrizCodigo.length; i++){
    if (stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada =  stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}



function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textoEntrada.value);
    textoSaida.value = textoDesencriptado; 
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i=0; i< matrizCodigo.length; i++){
    if (stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copy(){
    const copyText = document.getElementById("texto-saida")

        copyText.select() // Select the text field
        copyText.setSelectionRange(0, 99999) // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value)
}
