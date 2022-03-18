// array 자료에 붙일 수 있는 tuple type
// 첫번재 자료에는 무조건 string 두번째 자료에는 무조건 boolean
let dog = ['dog', ture];
// ?기호는 항상 맨 뒤에 붙일 수 있다.
let dag2 = ['dog2', false];
// 함수에서 쓰는 tuple rest parameter
function 함수(...x) {
    console.log(x);
}
함수(111, '222');
// array 합칠 때 ...spread 연산자랄 사용한다.
// 이때 타입 지정은 ?
let arr = [1, 2, 3];
let arr2 = [4, 5, ...arr];
// 1.문제 이렇게 생긴 자료는 탑지정 어떻게 해야될까?
// tuple 타입과 spread연산자를 사용 하자!
let arr = ['anyying', 4000, true, false, true, true, true, false];
let arr = ['anyying', 4000, true, false, true, true, true, false];
// 2.문제 함수에 타입지정을 해보자
//1. 이 함수의 첫째 파라미터는 문자,
//2. 셋째 파라미터부터는 숫자 또는 문자가 들어와야 한다.
//3. 그럼 함수에 파라미터를언떠헥 만들고 타입지정은 또 어떻게 해야될까요?
// tuple 타입과 rest parameter 사용해보자
function ff(...rest) {
}
ff('a', true, 5, 23, '3', 2);
