import type { Expect, Equal } from 'type-testing';
import { survivalRatio } from './04';

const start = survivalRatio(2009);
type T0_Actual = typeof start;
type T0_Expected = number;
type T0 = Expect<Equal<T0_Actual, T0_Expected>>;

const now = survivalRatio(2024);
type T1_Actual = typeof now;
type T1_Expected = number;
type T1 = Expect<Equal<T1_Actual, T1_Expected>>;

const q1_2009 = survivalRatio('2009 Q1');
type T2_Actual = typeof q1_2009;
type T2_Expected = number;
type T2 = Expect<Equal<T2_Actual, T2_Expected>>;

const q2_2024 = survivalRatio('2024 Q2');
type T3_Actual = typeof q2_2024;
type T3_Expected = number;
type T3 = Expect<Equal<T3_Actual, T3_Expected>>;

// @ts-expect-error
survivalRatio(true);

// @ts-expect-error
survivalRatio([1]);

// @ts-expect-error
survivalRatio({ 1: 1 });
