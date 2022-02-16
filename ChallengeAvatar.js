//


function solution(A, B, C, D) {
    const added = []
    const num = [A,B,C,D]
    console.log("SET: " + num.join(" "))

    for(let i = 0; i < 4; i++) {
        const num1 = removeElement(num, i)

        for(let j = 0; j < 3; j++) {
            const num2 = removeElement(num1, j)

            for(let k = 0; k < 2; k++) {
                const num3 = removeElement(num2, k)

                const current = [num[i], num1[j], num2[k], num3[0]]

                if(isCorrect(current) && !added.includes(current.join(""))){
                    added.push(current.join(""))
                }
            }   
        }
    }

    console.log("RESULT: " + added.length)
    console.log("SOLUTIONS: " + added)
    console.log("----------------------------------")

}

const isCorrect = ar => {
    if(ar[0] > 2)
        return false
    if(ar[0] === 2 && ar[1] > 3)
        return false
    if(ar[2] > 5)
        return false
    return true
}

const removeElement = (ar, i) => [...ar.slice(0, i), ...ar.slice(i + 1)]


solution(1,8,3,2)
solution(2,3,2,2)
solution(0,1,2,3)