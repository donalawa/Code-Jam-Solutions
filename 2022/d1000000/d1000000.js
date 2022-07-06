const fs = require('fs')
const input = fs.readFileSync(0,'utf8').trim().split('\n')

let currentLine = 0

function readLine(){
    return input[currentLine++]
}

let T = readLine()

for(let i=1; i <= T ; i++){
   let N = readLine()
    let S = readLine().split(' ').map(function (x) { 
        return parseInt(x, 10); 
    });
   console.log(`Case #${i}: ${dice(N,S)}`)
}

function dice(N,S) {

let straight = [];
let notStraight = [];

notStraight = S;

// notStraight.sort((a,b) => parseInt(a) - parseInt(b));

let straightMax = 0;

while(notStraight.length > 0) {
    let notStraightMin = notStraight.splice(notStraight.indexOf(Math.min(...notStraight)),1)[0];
    // let notStraightMin = notStraight.shift();
    if(straight.indexOf(notStraightMin) == -1) {
        straight.push(straightMax+1);
    }
    straightMax = Math.max(...straight)
}
    
    return straight.length;
}
