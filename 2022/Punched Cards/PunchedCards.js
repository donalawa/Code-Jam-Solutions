const fs = require('fs');

const input = fs.readFileSync(0,'utf8').trim().split('\n');

let currenLine = 0;

function readLine() {
    return input[currenLine++];
}


let T = readLine();

for(let i = 1; i <= T; i++) {
    let[R,C] = readLine().split(' ');
    let answer = matrixCard(R,C);
    console.log(`Case #${i}:`);
    for(let i = 0; i < answer.length; i++) {
        console.log(answer[i]);
    }
}

function matrixCard(R,C) {
    let decoration = "+-";
    let content =  "|.";

    let result_start = decoration.repeat(C - 1);
    let result_middle  = content.repeat(C -1);
    let result_end = decoration.repeat(C);

    let result = `
    ..${result_start}+
    ..${result_middle}|
    ${result_end}+`;

    let box = '';
    let boxes = [];
    let finDec = "+-";
    let finalMid = "|.";
    boxes.push(result);
    for(let i =0; i < R - 1; i++) {
        box = `${finalMid.repeat(C)}| \n${finDec.repeat(C)}+`
        boxes.push(box);
    }

    return boxes;
}


// TAKE INPUT AND CALCULATE