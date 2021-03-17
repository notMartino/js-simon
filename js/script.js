// Funzione che torna un numero random [min, max]
function getRandom(min, max) {
    max = max - min + 1;
    var rndNumber = Math.floor(Math.random() * max) + min;
    return rndNumber;
}

// Funzione che richiede 5 volte un numero random
function fiveRndNumbers() {
    while (rndNumbers.length < 5) {
        var rndNumber = getRandom(1, 100);

        if(!rndNumbers.includes(rndNumber)){
            rndNumbers.push(rndNumber);
        }
    }
}

// Funzione di alert numeri da ricordare
function alertMemory() {
    fiveRndNumbers();
    alert('You have 30s then you rewrite these numbers: ' + rndNumbers);
}



// -------------------- Normal code -----------------------
var rndNumbers = [];
var inputNumbers = [];
var correctNumbers = [];

var punteggio = init();
console.log('');
