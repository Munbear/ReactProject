declare let dog: [string, boolean];
declare let dag2: [string, boolean?];
declare let arr: number[];
declare let arr2: [number, number, ...number[]];
declare let arr: (string | number | boolean)[];
declare type Arr = [string, number, ...boolean[]];
declare let arr: Arr;
declare function ff(...rest: [string, boolean, ...(number | string)[]]): void;
