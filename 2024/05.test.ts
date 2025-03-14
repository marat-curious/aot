import type { Expect, Equal } from 'type-testing';
import { createRoute } from './05';

const oneMill = createRoute('💨Dasher', 100_000_000);
type T0_Actual = typeof oneMill;
type T0_Expected = 100_000_000;
type T0 = Expect<Equal<T0_Actual, T0_Expected>>;

const two = createRoute('💃Dancer', 2);
type T1_Actual = typeof two;
type T1_Expected = 2;
type T1 = Expect<Equal<T1_Actual, T1_Expected>>;

const three = createRoute('🦌Prancer', 2);
type T2_Actual = typeof three;
type T2_Expected = 2;
type T2 = Expect<Equal<T2_Actual, T2_Expected>>;

const four = createRoute('🌟Vixen', '1');
type T3_Actual = typeof four;
type T3_Expected = '1';
type T3 = Expect<Equal<T3_Actual, T3_Expected>>;

const five = createRoute('☄️Comet', true);
type T4_Actual = typeof five;
type T4_Expected = true;
type T4 = Expect<Equal<T4_Actual, T4_Expected>>;

const six = createRoute('❤️Cupid', [1]);
type T5_Actual = typeof six;
type T5_Expected = number[];
type T5 = Expect<Equal<T5_Actual, T5_Expected>>;

const seven = createRoute('🌩️Donner', { 1: 1 });
type T6_Actual = typeof seven;
type T6_Expected = { 1: number };
type T6 = Expect<Equal<T6_Actual, T6_Expected>>;

const eight = createRoute('⚡Blitzen', Symbol('🔴 === evil'));
type T7_Actual = typeof eight;
type T7_Expected = symbol;
type T7 = Expect<Equal<T7_Actual, T7_Expected>>;
