interface Square {
    color: string;
    width: number;
}
declare let 네모: {
    color: string;
    width: number;
};
interface Student {
    name: string;
}
interface Teacher extends Student {
    age: number;
}
declare let 학생: Student;
declare let 선생: Teacher;
declare type Animal = {
    name: string;
};
declare type Cat = {
    age: number;
} & Animal;
