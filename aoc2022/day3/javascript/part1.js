import {input} from './input.js';

function setIntersection(a,b) {
    const intersection = new Set();
    for(const entry of a) {
        if(b.has(entry)) {
            return entry;
        }
    }
}

console.log(
input
    .split('\n') // split the rucksacks
    .map((e) => e.split('')) // split the items
    .map((e) => [new Set(e.splice(0, e.length/2)), new Set(e)])
    .map((e) => setIntersection(e[0],e[1]))
    .map((e) => {
        const code = e.charCodeAt(0);
        if(code >= 97) {
            return code - 96;
        } else {
            return code - 38;
        }
    })
    .reduce((a,e) => a+e, 0)
);