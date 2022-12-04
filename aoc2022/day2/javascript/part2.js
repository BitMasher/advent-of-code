import {input} from './input.js';

const lose=0;
const draw=3;
const win=6
const rock=1;
const paper=2;
const scissors=3;
const results = {
    'A': {'X':lose+scissors, 'Y':draw+rock, 'Z':win+paper},
    'B': {'X':lose+rock, 'Y':draw+paper, 'Z':win+scissors},
    'C': {'X':lose+paper, 'Y':draw+scissors, 'Z':win+rock}
}

function roundPoints(player1, player2) {
    return results[player1][player2]
}

console.log(
    input
        .split('\n') // split the rounds
        .map(e=>e.split(' ')) // split the players
        .map(e=>roundPoints(e[0],e[1])) // calculate points for round
        .reduce((a,e)=>a+e,0) // total points earned
);