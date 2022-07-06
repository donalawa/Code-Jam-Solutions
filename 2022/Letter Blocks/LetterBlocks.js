
const fs = require('fs')
const input = fs.readFileSync(0,'utf8').trim().split('\n')
let currentLine = 0;
function readLine(){ 
    return input[currentLine++] 
}
    let T = readLine() 
    for(let i=1; i <= T ; i++){
     let N = readLine() 
     let S = readLine()
     console.log(`Case #${i}: ${soluTion(S.split(' '))}`) 
    }


function checkStrinDup(str) {
    let passed = [];
    let dup = false;
    let test = str;
    for(let i = 0; i < test.length; i++) {

        if(passed.indexOf(test[i]) >= 0 && passed[i - 1] != test[i]) {
            dup = true;
            break;
        }
        passed.push(test[i]);
    }
    if(dup) {
        dup = true;
        // SO WE STOP HERE
    }
    return dup;
}


function permutator(inputArr) {
    var results = [];
  
    function permute(arr, memo) {
      var cur, memo = memo || [];
  
      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur));
        }
        permute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
      }
  
      return results;
    }
  
    return permute(inputArr);
  }
    // console.log(permutator(['CODE','JAM','MIC','EEL','ZZZZZ']));


function soluTion(arrData) {
    // next check
    let testData = arrData;
    let imporssible = false;
    let finalResult = "IMPOSSIBLE"

    for(let m = 0; m < testData.length; m++) {
        if(checkStrinDup(testData[m])) {
            imporssible = true;
            break;
        }
    }
    if(imporssible) {

        return finalResult;
        
    }

    for(let i = 0; i < testData.length; i++) {
        let start = testData[i].split('')[0];;
        let end = testData[i].split('')[testData[i].length - 1]
        // console.log('start:',start);
        // console.log(end)

        for(let k = i+1; k < testData.length; k++) {
            if((testData[k].indexOf(start) >=0 && start != testData[k][testData[k].length - 1]) && end != testData[k][0]) {
                imporssible = true;
                break;
            }
        }
        
        if(imporssible) {
            break;
        }
    }

    if(imporssible) {
        
        return finalResult;
    }

    let pemResult = permutator(testData);

    let good = "";

    for(let i = 0; i < pemResult.length; i++) {
        // console.log("PEM COMBINATION")
        // console.log(pemResult[i])
        if(!checkStrinDup(pemResult[i].join(""))){
            imporssible = false;
            good = pemResult[i].join("");
            finalResult = good;
            // console.log(good);
            break;
        }
    }

    // console.log("final");
    return finalResult;
}
