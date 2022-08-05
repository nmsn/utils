export declare type ValueOf<T> = T[keyof T];

export declare type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
