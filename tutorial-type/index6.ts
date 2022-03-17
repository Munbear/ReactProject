// // type alias = type 변수type AnimalType = string|number|undefined;
// // type InfoType = {name: string, age: number}
// // type GfType = {
// //     redonly name : string
// // }
//
// // let 동물 :Animal = 'img'
// //
// // let man :Info = {name: kim, age: 20}
//
// // const glrifriend :GType = {
// //     name : 'mumu'
// // }
// // glrifriend.name = 'momo'
// type Girlfriend = {
//    readonly name : string
// }
// const 여친 :Girlfriend = {
//     name : '엠버'
// }
//
//
//
// // 타입을 합(extend)칠 수 있다.
// type NameType = string;
// type AgeType = number;
// type PersonType = NameType | AgeType;
//
// // obj 타입 합치기(extend)
// type PositionX = { x : number};
// type PositionY = { y : number};
//
// type NewType = PositionX & PositionY
// let position :NewType = { x : 10, y : 20}
//
// type HomeWork = {
//     color? : string,
//     size : number,
//     readonly position : number[]
// }
//
// type HomeWorkTwo = {
//     name : string,
//     phone : number,
//     email? : string
// }
//
// type AddHomework = {
//     adult : boolean
// }
//
// type HomeWorkThree = HomeWorkTwo & AddHomework;
//
