import { MutableRefObject } from 'react';

export type TargetValue<T> = T | undefined | null;

export type TargetType = HTMLElement | Element | Window | Document;

export type BasicTarget<T extends TargetType = Element> =
  | (() => TargetValue<T>)
  | TargetValue<T>
  | MutableRefObject<TargetValue<T>>;

// 获取对象值类型
export declare type ValueOf<T> = T[keyof T];

// 获取数组的值的类型
export declare type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

// 通过对象的值的类型获取 key 的类型
export declare type GetKeyByValueType<T, Condition> = {
  [K in keyof T]: T[K] extends Condition ? K : never;
}[keyof T];

// 获取异步函数返回的结果
export declare type AsyncReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;
