// class 에서 사용가능한 protected, static키워드
// class 복사하고싶을때
class User {
    constructor() {
        this.x = 10;
    }
}
class NewUser extends User {
    doThis() {
        this.x = 20;
    }
}
// let 사람  = new NewUser();
class Muser {
    constructor() {
        this.y = 20;
    }
}
Muser.x = 10;
let 자식 = new Muser();
class Juser {
    constructor() {
        this.intro = this.skill + '전문가입니다.';
    }
}
Juser.skill = 'js';
let 철수 = new Juser();
console.log(철수);
Juser.skill = 'ts';
let 철수2 = new Juser();
console.log(철수2);
