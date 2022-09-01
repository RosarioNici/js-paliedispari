/* Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/
/*
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


*/






/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */





// impostiamo il meccanismo del gioco per il pari


let result;
function playOddOrEven(human, pc) {
    result = human + pc
    console.log(result)
    if (result % 2 === 0) {
        alert('Hai vinto')
    } else {
        alert('Ha vinto il PC')
    }

}
function playOddOrEvenInverse(human, pc) {
    result = human + pc
    console.log(result)
    if (result % 2 != 0) {
        alert('Hai Vinto')
    } else {
        alert('Ha vinto IL pc')
    }
}


// impostimao gli eventi sui pulsanti
const buttonOdd = document.getElementById('odd')

const buttonEven = document.getElementById('even')

// creaiamo le funzioni per i bottoni

buttonEven.addEventListener('click',
    function numberEvenInsert() {
        const numberEven = parseInt(prompt('Inserisci un numero pari da 1 a 5'))

        let numberPc = Math.floor(Math.random() * 5 + 1)
        console.log(numberPc)

        if (!isNaN(numberEven)) {

        } else {
            alert('Non hai inserito un numero')
        }
        if (numberEven > 5) {
            alert(`hai inserito ${numberEven} che non è compreso tra 1 e 5`)
        } else {
        }
        if (numberEven % 2 === 0) {
            console.log(numberEven)
        } else {
            alert(`${numberEven} non  è un numero pari`)
        }

    },
    // playOddOrEven(numberOdd, numberPc)
)


buttonOdd.addEventListener('click',
    function numberOddInsert() {
        const numberOdd = parseInt(prompt('Inserisci un numero pari da 1 a 5'))
        let numberPc = Math.floor(Math.random() * 5 + 1)
        console.log(numberPc)
        if (!isNaN(numberOdd)) {

        } else {
            alert('Non hai inserito un numero')
        }
        if (numberOdd > 5) {
            alert(`hai inserito ${numberOdd} che non è compreso tra 1 e 5`)
        } else {
        }
        if (numberOdd % 2 === 0) {
            alert(`${numberOdd} non  è un numero dispari`)
        } else {
            console.log(numberOdd)
        }
    },
    // playOddOrEvenInverse(numberOdd, numberPc)
)


// creiamo la funzione di generazione numero random per il pc



