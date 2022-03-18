// rest parameter
function fff(...a) {
    //rest parameter
}
// rest parameter type 지정 \
function ff(...a) {
}
// ...(spread operator)문법 괄호를 벗겨주세요 문법
// destructuring
let [변수1, 변수2] = ['ㅇㄹㄴ', 100]; // = 변수1 = ㅇㄹㄴ 변수2 = 100 이 되어 나옴
let { student, age } = { student: true, age: 20 }; // obj
let obj = { student: true, age: 20 };
function ff({ student, age }) {
    console.log(student, age);
}
ff({ student: true, age: 20 });
let person = { student: true, age: 20 };
// 함수 파라미터에 오브젝트 타입지정 해보기
function 함수({ student, age }) {
    console.log(student, age);
}
함수({ student: true, age: 20 });
//숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어보기
// 최댓값이 (6,7,8,9) 이렇게 쓰면 9가 리턴 되어야한다.
// 조건1 넣을 수 있는 숫자 갯수는 제한이 없음 0이상 정수만 가능
function 최댓값(...x) {
    let result = 0;
    x.forEach((i) => {
        if (result < i) {
            return  = i;
        }
    });
    return result;
}
console.log(최댓값(4, 2, 6, 3, 2, 7, 8));
function 함수({ user, comment, admin }) {
    console.log(user, comment, admin);
}
함수({ user: 'park', comment: [3, 5, 4], admin: false });
function 함수2([a, b, c]) {
    console.log(a, b, c);
}
함수2([40, 'wine', false]);
