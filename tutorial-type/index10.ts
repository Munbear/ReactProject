class Person {

    name :string;
    constructor(a :string) {
        this.name = a;
    }

    //prototype
    함수(a :string){
        console.log('hello' + a)
    }
}

let 사람 1 = new Person('kim');
let 사람 2 = new Person('park');
사람1.함수('안녕')