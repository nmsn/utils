export declare type ValueOf<T> = T[keyof T];

export declare type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

export declare type GetKeyByValueType<T, Condition> = {
  [K in keyof T]: T[K] extends Condition ? K : never;
}[keyof T];
