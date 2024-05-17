import { Equal, Expect } from "type-testing";
import { AppendGood } from "./07";

type WellBehavedList = {
  tom: {
    address: "1 candy cane lane"
  },
  timmy: {
    address: "43 chocolate dr"
  },
  trash: {
    address: "637 starlight way"
  },
  candace: {
    address: "12 aurora"
  }
};

type test_WellBehavedList_actual = AppendGood<WellBehavedList>;
type test_WellBehavedList_expected = {
  good_tom: {
    address: "1 candy cane lane"
  },
  good_timmy: {
    address: "43 chocolate dr"
  },
  good_trash: {
    address: "637 starlight way"
  },
  good_candace: {
    address: "12 aurora"
  }
};

type test_WellBehavedList = Expect<Equal<test_WellBehavedList_actual, test_WellBehavedList_expected>>;

type Unrelated = {
  dont: "cheat",
  play: "fair"
};

type test_Unrelated_actual = AppendGood<Unrelated>;
type test_Unrelated_expected = {
  good_dont: "cheat",
  good_play: "fair"
};

type test_Unrelated = Expect<Equal<test_Unrelated_expected, test_Unrelated_expected>>;
