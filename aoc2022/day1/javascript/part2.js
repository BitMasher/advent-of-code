import {input} from "./input.js";
console.log(input
    .split('\n\n') // separate the elves
    .map((e) => e.split('\n')) // separate the items
    .map((e) =>
        e.reduce((a, e) => a += parseInt(e, 10), 0)) // sum the items
    .sort().reverse()
    .filter((_,i)=>i<3)
    .reduce((e,a) => a+e, 0));