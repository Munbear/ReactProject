// 조건문으로 타입만들기 & infer

// 삼항연산자 개념
3 > 1 ? console.log('맞음') : console.log('아님')
//조건식은extends 사용해야됨

type Age<T> =  T extends string ? string : unknown

let a :Age<string>
let a2 :Age<number> // >> unknown

type FirstItem<T> = ??

//infer 키워드
