// Code your solutions in this file

function writeCards(namesArray, event) {

    let thankYouCards = [];

    for (let i = 0; i < namesArray.length ; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards
}

let countDownNumber = 10;

function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

countDown(10);