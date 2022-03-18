// class 에서 사용가능한 protected, static키워드
// class 복사하고싶을때

class User {
    protected x = 10;
}

class NewUser extends User {
    doThis(){
        this.x = 20;
    }
}

// let 사람  = new NewUser();

class Muser {
    public static x = 10;
    y = 20;
}

let 자식 = new Muser();

class Juser {
    static skill = 'js';
    intro =  this.skill + '전문가입니다.'
}

let 철수 = new Juser();
console.log(철수);

Juser.skill = 'ts';

let 철수2 = new Juser();
console.log(철수2)