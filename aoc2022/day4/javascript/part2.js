import {input} from './input.js';

function rangeOverlaps(range1, range2) {
    return (range1[1] >= range2[0] && range1[0] < range2[1]) ||
        (range2[1] >= range1[0] && range2[0] < range1[1])
}
function rangeContains(range1, range2) {
    return (range1[0] <= range2[0] && range1[1] >= range2[1]) ||
        (range2[0] <= range1[0] && range2[1] >= range1[1]);
}

console.log(
    input
        .split('\n') // split the groups
        .map((e) => e.split(',')) // split the partners
        .map((e) => e.map((e2) => e2.split('-').map((e3) => parseInt(e3)))) // split the ranges
        .map((e) => rangeOverlaps(e[0],e[1]) || rangeContains(e[0],e[1]))
        .filter((e) => e)
        .length
)