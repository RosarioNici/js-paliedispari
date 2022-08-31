/* Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/

//chiediamo all'utente una parola
const word = prompt('Scrivi una parola')

console.log(word)


// creoiamo la funzione per controllare se è palindroma
let palindromeWord = word.split('')

console.log(palindromeWord)

palindromeWord = palindromeWord.reverse('')
console.log(palindromeWord)
let palindromeInverse = palindromeWord.join('')


if (palindromeInverse === word) {
    console.log(`la parola ${word} è una parola palindroma`)
} else {
    console.log(`La parola inserita:${word} non è palindroma`)
}











/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */