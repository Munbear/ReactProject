// 타입을 파라미터로 입력하는 Generic
// 타입 파라미터 입력하는 함수 (Generic)
function 함수<MyType, MyType2 >(x :MyType[]) :MyType {
    return x[0]
}

let a = 함수<number>([4,2])

//타입파라미터 제한두기
function 함수2<Type extends number >(a :Type) {
    return a - 1
}

let y = 함수2<number>(100)

//커스텅ㅁ 타입도 타입파라마터 제한 가능

interface LengthCheck {
    length : number
}

function 함수<Aaa extends LengthCheck>(g : Aaa){
    return x.length
}