import {input} from './input.js';

function setIntersection(a,b,c) {
    const intersection = new Set();
    for(const entry of a) {
        if(b.has(entry)) {
            if(c.has(entry)) {
                return entry;
            }
        }
    }
}

console.log(
    input
        .split('\n') // split the rucksacks
        .map((e) => e.split('')) // split the items
        .map((e) => new Set(e))
        .reduce((a,e,i) => {
            i%3===0 && a.push([]);
            a[Math.floor(i/3)].push(e)
            return a;
        }, [])
        .map((e) => setIntersection(e[0],e[1],e[2]))
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