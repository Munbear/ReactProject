declare class User {
    protected x: number;
}
declare class NewUser extends User {
    doThis(): void;
}
declare class Muser {
    static x: number;
    y: number;
}
declare let 자식: Muser;
declare class Juser {
    static skill: string;
    intro: string;
}
declare let 철수: Juser;
declare let 철수2: Juser;
