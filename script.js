function isPalindrome(str) {
    let strFeita = str.toUpperCase();
    strFeita = strFeita.replaceAll(" ", "");
    strFeita = strFeita.split("");

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
    let numerosMaxEMin = [0, 0];
    for (let indice = 0; indice<arr.length; indice++) {
        if(numerosMaxEMin[1] <= arr[indice]) {
            numerosMaxEMin[1] = arr[indice]
        }
    }
    let numerosMin = [0];
    numerosMin[0] = numerosMaxEMin[1]
    for (let indice = 0; indice<arr.length; indice++) {
        if(numerosMin[0] > arr[indice]) {
            numerosMin[0] = arr[indice]
        }
    }
    numerosMaxEMin[0] = numerosMin[0];
    return numerosMaxEMin
}
