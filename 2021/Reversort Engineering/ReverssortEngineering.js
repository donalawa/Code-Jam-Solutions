const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


let results = [];

function calCulate(inputVal) {

let revNum = inputVal.split(' ')[0];
let revRslt = inputVal.split(' ')[1];
let all = [];

for(let i = revNum; i>0; i--) {
    all.push(i)
}

let perms = getArrayMutations(all,[],all.length);
let answer = [];
let finalAnswer = [];


  for(let i = 0; i < perms.length; i++) {
      answer = getAnswer(perms[i].length,perms[i]);
      if(answer[0] == revRslt) {
          finalAnswer = answer[1];
          return finalAnswer.join(' ')
      }
     
  }

  
  if(answer[0] != revRslt) {
      finalAnswer.push('IMPOSSIBLE');
      return finalAnswer[0];
  }

}



function getAnswer(N,arr) {
    // console.log(arr)
    let score = 0;
    let keep = arr.slice()
    // console.log(arr)

    for (let i = 1; i <= N - 1; i++) {
        let min = Math.min(...arr);
        let index = arr.indexOf(min) + 1;
        let subArr = arr.splice(0, index);
        subArr.reverse();
        score += subArr.length;
        arr.splice(0,0,...subArr);
        arr.shift();
    }

    return [score,keep]
}

function getArrayMutations(arr, perms = [], len = arr.length) {
    if (len === 1) perms.push(arr.slice(0))
    
    for (let i = 0; i < len; i++) {
      getArrayMutations(arr, perms, len - 1)
  
      len % 2 // parity dependent adjacent elements swap
        ? [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]]
        : [arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]
    }
  
    return perms
  }

  
//   calCulate(2,1000)

let T;
let index = 0;
readline.question();

readline.on('line',(input) =>{
    if(index===0)
        T = Number(input);
    else{
        results.push(`Case #${index}: ${calCulate(input)}\n`);
        T = T -1;
    }
     if(T === 0){
        readline.close();
    }
    index++; 
});

readline.on('close',() =>{
    console.log(...results);
});
