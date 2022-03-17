// function f(x :number) :number {
//     return x * 2
// }
//
// //void type
// //void is could be block return
// function ff(x :number) :void {
//
// }
//
// // ? 연산자는 ~가 들어올수도 있다~ 라는 뜻인데 number | undefined 와 같음
// function fff(x? :number) :void {
//
// }
// fff()
//
// function MakeName(x? :string) :void {
//     if(x) {
//         console.log('안녕하세요' + x)
//     } else {
//         console.log('왜 입력안함?')
//     }
// }
//
// function counting(x :number | string) :number{
//     return x.toString().length
// }
//
// console.log(counting);
//
// //문제3
// // function married(money:number, house:boolean, charm:string) :string|void{
// //     let score :number = 0;
// //     score += money;
// //     if(house === true){
// //         score += 500
// //     }
// //     if (charm === '상') {
// //         score += 100
// //     }
// //     if(score >= 600) {
// //         return 'lets marry'
// //     }
// // }
// //
// // console.log(married(100,true,'상'))