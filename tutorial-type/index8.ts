// // 함수와 methods에 type alias 지정하는 법
//
// type 함수타입 = (a :string) => number;
//
// //함수표현식
// let 함수 :함수타입 = function(){
//     return 190
// }
//
// //object 안에 함수 만들수 있다
// // let 회원정보 : = {
// //     name: 'kim',
// //     plusOne(a){
// //         return a + 1
// //     }
// //     changeName : () => {}
// //
// // }
//
// type Member = {
//     name : string,
//     age : number,
//     plusOne : (x : number) => number,
//     changeName : () => void
// }
//
// type CutType = (x :string) => string
//
// let cutZero :CutType = function (x){
//     let result = x.replace(/^0+/, "");
//         return result
// }
// function removeDash(x :string) :number{
//     let result = x.replace(/-/g, "");
//     return parseFloat(result)
// }
//
