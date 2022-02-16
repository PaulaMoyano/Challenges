//Dado un número n, iterar cada número hasta llegar al número n empezando desde 1 y terminando en el número n inclusive. 
//Si i es múltiplo de 3 y 5, imprimir ADNTech.
//Si i es múltiplo de 3 (pero no de 5) imprimir ADN
//Si i es múltiplo de 5 (pero no de 3) imprimir Tech
//Si i no es múltiplo ni 3 de 5, imprimir el valor de i.



function ADNTech(n) { 
    for (let i = 1; i <= n; i++) {
        if (i%3 === 0 && i%5 === 0) {
            console.log("ADNTech");
        } else if (i%3 === 0) {
            console.log("ADN");
        } else if (i%5 === 0) {
            console.log("Tech");
        }
        else {
            console.log(i)
        }
    } 
}

console.log(ADNTech(100))
