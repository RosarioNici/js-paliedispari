/* Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/

//chiediamo all'utente una parola
const word = prompt('Scrivi una parola')

console.log(word)


function parolaPalindroma() {
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
}
parolaPalindroma(word)









/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */



// impostimao gli eventi sui pulsanti

// const buttonOdd = document.getElementById('odd')

// const buttonEven = document.getElementById('even')

// let numberUser;

// buttonEven.addEventListener('click',
//     function oddOrEven() {
//         numberUser = parseInt(prompt('Inserisci un numero pari compreso tra 1 a 5 '))
//         if (!isNaN(numberUser) < 6) {
//             console.log(numberUser)
//         } else {
//             alert(`Attenzione ${numberUser} non è un numero o è superiore a 5 inserisci un numero da 1 a 5`)
//         }

//     }
// )