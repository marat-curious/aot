import type { Expect, Equal } from 'type-testing';

const { MOOD_LIGHTS } = process.env;
type T0_Actual = typeof MOOD_LIGHTS;
type T0_Expected = 'true';
type T0 = Expect<Equal<T0_Actual, T0_Expected>>;

const { BATH_TEMPERATURE } = process.env;
type T1_Actual = typeof BATH_TEMPERATURE;
type T1_Expected = '327.59';
type T1 = Expect<Equal<T1_Actual, T1_Expected>>;

const { STRAWBERRIES } = process.env;
type T2_Actual = typeof STRAWBERRIES;
type T2_Expected = 'chocolate';
type T2 = Expect<Equal<T2_Actual, T2_Expected>>;
