// Narrowing 할 수 있는 방법 더 알아보기
// null & undefined 타입체크하는 경우가 잦음
// &&연산자로 null & undefined타입체크하기
function 함수(a) {
    if (a && typeof a === 'string') {
        //a가 undefined면 if문 실행x
        //a가 string이면 if문 실행o
    }
}
function 함수2(animal) {
    if ('swim' in animal) {
        maimal.swim;
    }
}
// 이런 경우 오브젝트 속성이 같아서 in 키워드는 불가능 , instanceof 부모 class 불가능
// narrowing 하는 법은
// literal type 강제로 만들어두면 나중에 도움됨
// object 타압미다 literal type 만들어두면 narrowing편리해짐
function 함수3(x) {
    if (x.wheel === '4개') {
        console.log('x는 car타입이에요' + x.color);
    }
    else {
        console.log('the bike is' + x.color);
    }
}
