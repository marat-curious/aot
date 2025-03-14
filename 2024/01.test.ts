import type { Expect, Equal } from 'type-testing';
import type { Demand } from './01';

type Actual = Demand;
type Expected = number;

type Check = Expect<Equal<Actual, Expected>>
