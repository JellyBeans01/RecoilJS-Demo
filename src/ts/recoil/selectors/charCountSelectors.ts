import { selector } from "recoil";
import textAtom from "../atoms/textAtom";
import { StateKeys } from "../../types";

// A selector represents a piece of derived state. Derived state is a transformation of state. You can think of derived
// state as the output of passing state to a pure function that modifies the given state in some way

export const charCountSelectors = selector({
    key: StateKeys.CharCount,
    get: ({ get }) => {
        const text = get(textAtom);
        return text.length;
    },
});
