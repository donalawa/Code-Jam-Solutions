const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

let results = [];

function getAnswer(N,T) {


    let arr = T.split(' ');
    let score = 0;


    for (let i = 1; i <= N - 1; i++) {
        let min = `${Math.min(...arr)}`;
        let index = arr.indexOf(`${min}`) + 1;
        let subArr = arr.splice(0, index);
        subArr.reverse();
        score += subArr.length;
        arr.splice(0,0,...subArr);
        arr.shift();
    }
    results.push(score);
    return;
}


let T;
let N;
let index = 0;
readline.question();

readline.on('line',(input) =>{
    if(index===0)
        T = Number(input);
    else if(index%2 !== 0){
        N = input;
    }
    else if(index%2 ===0){
        getAnswer(+N,input);
    }
     index++; 
     if(index > T*2){
        readline.close();
    }
});

readline.on('close',() =>{
    for(let i = 0; i < results.length; i++) {
        console.log(`Case #${i+1}: ${results[i]}`);
    }
});