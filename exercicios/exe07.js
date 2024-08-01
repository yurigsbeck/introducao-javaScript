const a = 1
const b = 2
const c = 3

const cond1 = (a === b) && (a > c)
const cond2 = (a !== b) || (a <= c)
const cond3 = (c > b) && (c < a)
console.log(`o primeiro numero é idêntico ao segundo e o primeiro número é maior que o terceiro? ${cond1}`)
console.log(`o primeiro numero é diferente ao segundo ou o primeiro número é menor igual que o terceiro? ${cond2}`)
console.log(`o terceiro numero é idêntico ao segundo e o terceiro número é maior que o primeiro? ${cond3}`)