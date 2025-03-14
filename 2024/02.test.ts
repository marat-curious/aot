import type { Expect, Equal } from 'type-testing';
import type { Demand } from './02';

type T0_Actual = Demand;
type T0_Expected = 900_000;

type T0_Result = Expect<Equal<T0_Actual, T0_Expected>>;

// @ts-expect-error
type T0_Error = Expect<Equal<Denamd, number>>;
