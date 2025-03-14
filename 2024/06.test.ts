import type { Expect, Equal } from 'type-testing';
import { createRoute } from './06';

const oneMill = createRoute('🌩️Donner', 100_000_000);
type T0_Actual = typeof oneMill;
type T0_Expected = 100_000_000;
type T0 = Expect<Equal<T0_Actual, T0_Expected>>;

const two = createRoute('🔴Rudolph', 2);
type T1_Actual = typeof two;
type T1_Expected = 2;
type T1 = Expect<Equal<T1_Actual, T1_Expected>>;

const three = createRoute('💨Dasher', '3');
type T2_Actual = typeof three;
type T2_Expected = '3';
type T2 = Expect<Equal<T2_Actual, T2_Expected>>;

// @ts-expect-error
createRoute('🌟Vixen', true);

// @ts-expect-error
createRoute('💃Dancer', [1]);

// @ts-expect-error
createRoute('☄️Comet', { 1: 1 });
