// interface

// type Square = { color: string, width : number} 밑에 interface랑 비슷함
interface Square { color: string, width : number}
let 네모 = { color : 'red', width : 100}

interface Student {name:string}
// interface extends 하는법
interface Teacher extends Student{ age : number}

let 학생 :Student = { name : 'kim'}
let 선생 :Teacher = { name : '선생', age : 20}
//interface 장점 : extends로 복사가능


type Animal = { name : string}
type Cat = { age : number} & Animal // &기호(intersection type) 두 타입을 전부 만족하는 타입이라는 뜻
// type VS interface
// interface는 중복선언 가능
// type은 중복선언 불가능
// 외부 라이브러리같은 경우 interface를 많이 사용한다.

// &기호 쓸때 중복속성이 발생하면 미리 에러가 안나옴 

