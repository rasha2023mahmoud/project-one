'use strict';

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// console.log(bills);

// for (let i = 0; i < bills.length; i++) {

//     function calcTip() {

//         if (bills[i] >= 50 && bills[i] <= 300) {

//             tips.push(bills[i] * 0.15);

//             totals.push(bills[i] - tips[i]);

//         } else {

//             tips.push(bills[i] * 0.2);

//             totals.push(bills[i] - tips[i]);

//         }

//     }

//     calcTip();

// }
// console.log(tips);
// console.log(totals);



// function myDigree(myDig, fullDig) {

//     return (myDig / fullDig) * 100;

// }

// console.log(myDigree(277.2, 280));





// const test = [1, 5, 8, -1, 0];

// function minMax() {

//     let max = test[0];
//     let min = test[0];

//     for (let i = 0; i < test.length; i++) {
//         max < test[i] ? max = test[i] : max = max;
//         min > test[i] ? min = test[i] : min = min;
//     }

//     console.log(max);
//     console.log(min);

//     const avrage = max - min;
//     console.log(avrage);

// }

// minMax();

// let testArray = [2, 6, 8];
// let max = Math.max(...testArray);
// let min = Math.min(...testArray);
// console.log(max);
// console.log(min);

// const temp1 = [17, 21, 23];
// const temp2 = [12, 5, -5, 0, 4];

// function printForcast() {

//     for (let i = 0; i < temp2.length; i++) {

//         console.log(`${temp2[i]}C in ${i + 1} days...`);

//     }
// }

// start project one =============================================================================

const again = document.querySelector(".again");
const secretNumber = document.querySelector(".secretNumber");
const userNumber = document.querySelector(".userNumber");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const scoreValue = document.querySelector(".scoreValue");
const highScoreValue = document.querySelector(".highScoreValue");
let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

scoreValue.textContent = score;

check.addEventListener("click", function () {

    if (!userNumber.value) {

        message.textContent = "No Number ⛔";

    } else if (Number(userNumber.value) === secret) {

        secretNumber.textContent = userNumber.value;
        message.textContent = "Correct 🎉";
        document.body.style.backgroundColor = "rgb(57 75 255)";
        highScoreValue.textContent = scoreValue.textContent;

        if (score > highScore) {
            highScore = score;
            highScoreValue.textContent = scoreValue.textContent;
        }

    } else if (Number(userNumber.value) !== secret) {

        if (Number(userNumber.value) > secret) {

            message.textContent = "To High ↗️";
            score--;
            scoreValue.textContent = score;

        } else if (Number(userNumber.value) < secret) {

            message.textContent = "To Low ↘️";
            score--;
            scoreValue.textContent = score;
            
        }

    }

});


again.addEventListener("click", function () {

    message.textContent = "Start Guessing...";
    secretNumber.textContent = "?";
    document.body.style.backgroundColor = "rgb(18 18 18 / 92%)";
    secret = Math.trunc(Math.random() * 20) + 1;
    let score = 20;
    scoreValue.textContent = score;
    userNumber.value = " ";

});

// End Project One =============================================================================
// Strat project Two =========================================================================



// End project Two =========================================================================