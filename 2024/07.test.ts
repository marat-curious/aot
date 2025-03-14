import type { Expect, Equal } from 'type-testing';
import { createRoute } from './07';

const oneMill = createRoute('💨Dasher', ['Atherton', "Scarsdale", "Cherry Hills Village"]).route;
type T0_Actual = typeof oneMill;
type T0_Expected = [
    'Atherton',
    "Scarsdale",
    "Cherry Hills Village"
];
type T0 = Expect<Equal<T0_Actual, T0_Expected>>;

const two = createRoute('🌟Vixen', ['Detroit', "Cleveland", "Dayton"]).route;
type T1_Actual = typeof two;
type T1_Expected = [
    'Detroit',
    "Cleveland",
    "Dayton"
];
type T1 = Expect<Equal<T1_Actual, T1_Expected>>;
