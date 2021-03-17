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

// Funzione inserimento numeri
function insertNumbers(){
    while (inputNumbers.length < 5) {
        var numInput = parseInt(prompt('Inserisci il numero: '));
        if (!isNaN(numInput) && numInput > 0 && numInput <= 100) {
            if (inputNumbers.includes(numInput)) {
                console.log('Errore: numero già inserito!');
                continue;
            }
            inputNumbers.push(numInput);
            continue;
        }
        console.log('Errore: inserisci un numero da 1 a 100!');
    }
    var points = calcPoints();
    // console.log('Random numbers: ' + rndNumbers);
    console.log('Your numbers: ' + inputNumbers);

    if(points > 0){
        console.log('Correct numbers: ' + correctNumbers);
    }
    else{
        console.log('Correct numbers: none');
    }

    console.log('Total points: ' + points);
    

}

// Funzione calcolo punti e numeri vincenti
function calcPoints() {
    var punti = 0;
    for (let i = 0; i < inputNumbers.length; i++) {
        for (let j = 0; j < rndNumbers.length; j++) {
            if (inputNumbers[i] == rndNumbers[j]) {
                punti++;
                correctNumbers.push(inputNumbers[i]);
            }
        }
    }
    return punti;
}

function init(){
    alertMemory();
    setTimeout(insertNumbers, 3000);  
}

// -------------------- Normal code -----------------------
var rndNumbers = [];
var inputNumbers = [];
var correctNumbers = [];

init();

console.log('Random numbers: ' + rndNumbers);