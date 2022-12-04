import {input} from './input.js';

const results = {
    'A': {'X':0, 'Y':-1, 'Z':1},
    'B': {'X':1, 'Y':0, 'Z':-1},
    'C': {'X':-1, 'Y':1, 'Z':0}
}

const points = {
    'X': 1,
    'Y': 2,
    'Z': 3
}

function winner(move1, move2) {
    return results[move1][move2]
}

function roundPoints(player1, player2) {
    switch(winner(player1, player2)) {
        case -1:
            return 6 + points[player2];
        case 0:
            return 3 + points[player2];
        case 1:
            return 0 + points[player2];
    }
}

console.log(
input
    .split('\n') // split the rounds
    .map(e=>e.split(' ')) // split the players
    .map(e=>roundPoints(e[0],e[1])) // calculate points for round
    .reduce((a,e)=>a+e,0) // total points earned
);