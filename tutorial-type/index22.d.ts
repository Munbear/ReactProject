interface Person {
    age: number;
    name: string;
}
declare type PersonKeys = keyof Person;
declare let a: PersonKeys;
declare type Car = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
declare type TypeChanger<MyType> = {
    [key in keyof MyType]: string;
};
declare type 새로운타입 = TypeChanger<Car>;
