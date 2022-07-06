const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

let results = [];

function calCulate(test1) {
    
let uncompleted = test1.split(' ')[2];
let uknIndex = [];
let totalAnswers = [];

uncompleted.replace(/\?/g, (val,index) => {
    uknIndex.push(index);
});


function printAllKLength(set,k)
{
    let n = set.length;
    printAllKLengthRec(set, "", n, k);
}
 

function printAllKLengthRec(set,prefix,n,k)
{
    if (k == 0)
    {
        let pref = prefix.split('')
        let completed = uncompleted.trim().split('');
        for(i = 0; i < pref.length; i++) {
            completed[uknIndex[i]] = pref[i];
        }
        let answer = getAnswer(completed.join(''),test1.split(' ')[0],test1.split(' ')[1]);
        totalAnswers.push(answer)
        return;
    }

    for (let i = 0; i < n; ++i)
    {
   
        let newPrefix = prefix + set[i];
           
        printAllKLengthRec(set, newPrefix,n, k - 1);
    }
}


let k = uknIndex.length;
printAllKLength(['J', 'C'], k);
return Math.min(...totalAnswers);

function getAnswer(completed,cj1,jc1) {

    let jc = completed.split('JC').length - 1;

    let cj = completed.split('CJ').length - 1;
    
    let sum1 = jc * jc1;
    let sum2 = cj * cj1;
    
    return sum1 + sum2;
    
}

}

let T;
let index = 0;
readline.question();

readline.on('line',(input) =>{
    if(index===0)
        T = Number(input);
    else{
        results.push(calCulate(input));
        T = T -1;
    }
     if(T == 0){
        readline.close();
    }
    index++; 
});

readline.on('close',() =>{
    for(let i = 0; i < results.length; i++) {
        console.log(`Case #${i+1}: ${results[i]}`);
    }
});