// // public, private protected static
//
// class User {
//
//     name;
//     // constructor는 파라미터를 입력할 수 있다.
//     constructor() {
//         this.name = 'kim'
//     }
// }
//
// // class 에서 쓰는 puclic 키워드
// class Users {
//
//     public  name = 'kim';
//     constructor(a) {
//         this.name = a
//     }
// }
//
// let 유저1 = new Users('park')
// 유저1.name = '안녕';
//
// // class 에서 쓰는 private 키워드는 calss 안에서만 수정, 이용가능
//
// class Userss {
//
//     private name = 'kim';
//     constructor(a) {
//         this.name = a
//     }
// }
//
// let 유저2 = new Userss('park')
// 유저2.name
//
// class Useerss {
//     name: string;
//     private failyName : string = 'kim'; // 실수로 페밀리네임을 변경하는걸 막을 수 있음 (private 이용하면) class{} 안에서만 수정,사용가능
//     constructor(a) {
//         this.name = a + this.failyName
//     }
//     // 이런식으로 변경 할 수 있음
//     이름변경함수(){
//         this.failyName = 'park'
//     }
// }
//
// let 유저3 = new Useerss('민수')
// 유저3.이름변경함수()
//
// class Person {
//
//     constructor(public name :string,) {
//
//     }
// }
//
// let 자식 = new Person('kim')
// console.log(자식)
//
//
//
