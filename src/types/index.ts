import { MutableRefObject } from 'react';

export declare type ValueOf<T> = T[keyof T];

export declare type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

export declare type GetKeyByValueType<T, Condition> = {
  [K in keyof T]: T[K] extends Condition ? K : never;
}[keyof T];

export type TargetValue<T> = T | undefined | null;

export type TargetType = HTMLElement | Element | Window | Document;

export type BasicTarget<T extends TargetType = Element> =
  | (() => TargetValue<T>)
  | TargetValue<T>
  | MutableRefObject<TargetValue<T>>;
