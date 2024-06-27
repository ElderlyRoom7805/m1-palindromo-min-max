function strConversao(str) {
    return str.replace(/( )+/g, "");
}

function isPalindrome(str) {
    //conversões
    let strMaiuscula = str.toUpperCase();
    let strSemEspaco = strConversao(strMaiuscula);
    let strFeita = strSemEspaco.split("");

    //verificações
    let indiceNegativo = 0;
    for(let indice = 0; indice<strFeita.length; indice++){
        indiceNegativo++
        if(strFeita[indice] != strFeita[strFeita.length -indiceNegativo]){
            return false
        }
    }
    return true
}

function arrayMaxMin(arr){
    var numerosMaxEMin = [0, 0];

    //verificação máxima
    var numerosMax = [0];
    for (let indice = 0; indice<arr.length; indice++) {
        if(numerosMax[0] <= arr[indice]) {
            numerosMax[0] = arr[indice]
        }
    }
    numerosMaxEMin[1] = numerosMax[0];

    //verificação mínima
    var numerosMin = [0];
    numerosMin[0] = numerosMax[0]
    for (let indice = 0; indice<arr.length; indice++) {
        if(numerosMin[0] > arr[indice]) {
            numerosMin[0] = arr[indice]
        }
    }
    numerosMaxEMin[0] = numerosMin[0];
    return numerosMaxEMin
}
