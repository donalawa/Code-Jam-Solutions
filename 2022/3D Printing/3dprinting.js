const fs = require('fs');

const input = fs.readFileSync(0,'utf8').trim().split('\n');

let currenLine = 0;

function readLine() {
    return input[currenLine++];
}

let T = readLine();

for(let i = 0; i < T; i++) {
    let[C1,M1,Y1,K1] = readLine().split(' ');
    let[C2,M2,Y2,K2] = readLine().split(' ');
    let[C3,M3,Y3,K3] = readLine().split(' ');
    // console.log(`${C1} ${M1} ${Y1} ${K1}`)
    let result = printer(C1,C2,C3,M1,M2,M3,Y1,Y2,Y3,K1,K2,K3);
    if(result != undefined) {
        console.log(`Case #${i+1}: ${result[0]} ${result[1]} ${result[2]} ${result[3]}`);
    }else {
        console.log(`Case #${i+1}: IMPOSSIBLE`)
    }
    
}


function printer(C1,C2,C3,M1,M2,M3,Y1,Y2,Y3,K1,K2,K3) {

    let cmin = null;
    let mmin = null;
    let ymin = null;
    let kmin = null;
    C1 = parseInt(C1);
    C2 = parseInt(C2);
    C3 = parseInt(C3);
    M1 = parseInt(M1);
    M2 = parseInt(M2);
    M3 = parseInt(M3);
    Y1 = parseInt(Y1);
    Y2 = parseInt(Y2);
    Y3 = parseInt(Y3);
    K1 = parseInt(K1);
    K2 = parseInt(K2);
    K3 = parseInt(K3);
    
    cmin = Math.min(C1,C2,C3);
    mmin = Math.min(M1,M2,M3);
    ymin = Math.min(Y1,Y2,Y3);
    kmin = Math.min(K1,K2,K3);

    let maxBtwMin = Math.max(cmin,mmin,ymin,kmin);


    // console.log(cmin + mmin + ymin + kmin);

    if((cmin + mmin + ymin + kmin) < 1000000) {
        // IMPOSIBLE CASE
        return;
    }else {
        let total = cmin + mmin + ymin + kmin;
        let allMins = [cmin,mmin,ymin,kmin];
        let finalVals = [];

        let neededSum = 0;
        for(let i = 0; i < 3; i++) {
            if(neededSum < 1000000 && (neededSum + allMins[i]) <= 1000000) {
                neededSum += allMins[i]
                finalVals.push(allMins[i]);
                // finalVals.splice(finalVals.indexOf(allMins[i]), 1);

            }else {
                if((neededSum + allMins[i]) > 1000000){
                    // console.log(neededSum);
                    // console.log(allMins[i]);
                    let nextVal = (neededSum + allMins[i]) - 1000000;
                    nextVal = allMins[i] - nextVal;

                    neededSum += nextVal;
                    finalVals.push(nextVal)
                    continue
                }else {
                    // console.log("Exact amount");
                    // console.log(finalVals);
                    break;
                }
            }
        }

        if(neededSum == 1000000) {
            finalVals[finalVals.length] = 0;
        }else if(neededSum < 1000000) {
            let neededAmt = 1000000 - neededSum;
            neededSum += neededAmt;
            finalVals.push(neededAmt);
        }

        return finalVals;
        // console.log(neededSum);
        // console.log(finalVals);
        
    }
}


