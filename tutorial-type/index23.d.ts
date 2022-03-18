declare type Age<T> = T extends string ? string : unknown;
declare let a: Age<string>;
declare let a2: Age<number>;
declare type FirstItem<T> = ??;
