//implements 키워드
// implements 키워드는 타입지정문법이 아니다.
//implements 라는건 interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻이다.
// class 에다가 타입을 할당하고 변형시키는 키워드는 아니다.
interface WaterType {
    model : string,
    price : number
}

class Water implements WaterType{
    model : string;
    price : number = 1000;
    constructor(a :string) {
        this.model = a
    }
}

let drink = new Water('moring');