import { selector } from "recoil";
import { StateKeys } from "../stateKeys";
import textState from "../atoms/textState";

// A selector represents a piece of derived state. Derived state is a transformation of state. You can think of derived
// state as the output of passing state to a pure function that modifies the given state in some way

const charCountState = selector({
    key: StateKeys.CharCount,
    get: ({ get }) => {
        const text = get(textState);
        return text.length;
    },
});

export default charCountState;
