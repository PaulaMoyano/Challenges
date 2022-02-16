//Create a function that takes a non-empty string of characters as input and returns the character that occurs most frequently in the string 

let palabra = "birdwatching"
function maxRepetitiveChars (s) {
    let charCount = {}
    for ( let i = 0; i < s.length; i++ ) {
        if (charCount[s[i]]) {
            charCount[s[i]]++
        } else {
            charCount[s[i]] = 1
        }
    }
        
    const letras = Object.keys(charCount)
    let max = 0
    let letra = ""

    for(let j = 0; j < letras.length; j++) {
        if(charCount[letras[j]] > max) {
            max = charCount[letras[j]]
            letra = letras[j]
        }
    }
    return letra
}

const result = maxRepetitiveChars(palabra)
console.log(result)

