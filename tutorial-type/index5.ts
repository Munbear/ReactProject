function myf(x  :number | string){
    if(typeof x === 'string'){
        return x + "1"
    } else {
        return x + 1
    }
}

// myf(132);
// function (x :number|string){
//     let array :number[] = [];
//     if(typeof x === 'number') {
//         array[0] = x;
//     }
// }
//

// assertion 문법 용도
// 1. Narrowing할때 쓴다
// 2. 무슨 타입이 들어올지 100% 확실할 때
// 남이 짠 코드 수정할때 왜 타입에러가 나는지 모를겠을 때 비상용으로 쓰자


function cleaning(a :(number|string)[]){
    let cleaningDone :number[] = [];
    a.forEach( (b) => {
        if(typeof b === 'string') {
            cleaningDone.push(parseFloat(b))
        } else {
            cleaningDone.push(b)
        }
    })

    return cleaningDone
}

console.log( cleaning([123,'3']))