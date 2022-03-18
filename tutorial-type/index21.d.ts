interface StringOnly {
    [key: string]: string;
}
declare let user: StringOnly;
interface myType {
    'font-size': myType | number;
}
declare let css: myType;
