// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// FUNZIONI

function getRandomNumber(){
// funzione getRandomNumber che genera un numero casuale
    var number = Math.floor(Math.random()*100);
    return number;
}

function isNumberInArray(number, array){
//funzione isInArray per stabilire se un elemento è dentro a un array

    var found = false
    for(var i=0; i<=array.length; i++){
        if (array[i] == number){
            return found = true
        }
    }
    return found;
}

function showFiveRandomNumber(){
    var array = []
    for(var i=0; i<5; i++){
        array.push(getRandomNumber());
    }
    alert(array);
    return array;
}
// /FUNZIONI


var arrayUserFound = []
var arrayComputer = showFiveRandomNumber(); // mostro i 5 numeri

//chiedi con un ciclo for 5 volte un numero (dopo 2 secondi)
setTimeout(function() {
    for(var i=0; i<5; i++){
        var numberUser = parseInt(prompt("Inserisci un numero"));
        if(isNumberInArray(numberUser, arrayComputer) == true){
        //se il numero è presente in numeriComputer allora salva in arrayUserFound
            arrayUserFound.push(numberUser);
        }
    }
    //stampa arrayComputer e numero elenti array computer
    console.log("Hai indovinato " + arrayUserFound.length + " numeri. I numeri che hai indovinato sono: " + arrayUserFound)
}, 30000);





