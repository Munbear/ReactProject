// object 타입 변환기 만들기

interface Person {
    age : number,
    name : string
}

type PersonKeys = keyof Person;
let a :PersonKeys = 'name'


//타입 변환기 만들기 
type Car = {
    color : boolean,
    model : boolean,
    price : boolean | number
}

type TypeChanger<MyType> = {
    [key in keyof MyType] : string
}

type 새로운타입 = TypeChanger<Car>

