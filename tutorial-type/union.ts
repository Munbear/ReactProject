let member :number | string = 'king';
let Members : (number | string )[] = [1,'2',3];
let obj :{ a: string | number }= { a: '123'}

let abs :unknown; // any와 같은 기능 조금더 안전한

let Age : string|number;

let user :string = 'kim';
let age :undefined | number = undefined;
let married :boolean = false;
let chasu :(string|number|undefined|boolean)[] = [user, age, married];

let School :{
    score: (number|boolean)[],
    teacher :string,
    friend :string | string[]
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'john',
}
School.score[4] = false;
School.friend = ['Lee', School.teacher]


