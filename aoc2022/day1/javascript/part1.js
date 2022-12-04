import {input} from "./input.js";
console.log(input
    .split('\n\n') // separate the elves
    .map((e) => e.split('\n')) // separate the items
    .map((e) =>
        e.reduce((a, e) => a += parseInt(e, 10), 0)) // sum the items
    .reduce((e, a) => e > a ? e : a, 0)); // find the max