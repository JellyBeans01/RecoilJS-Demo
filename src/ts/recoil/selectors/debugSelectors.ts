import { selector } from "recoil";
import { StateKeys } from "../../types";
import debugAtom from "../atoms/debugAtom";

export const displayDebugComponentsSelector = selector({
    key: StateKeys.DebugComponents,
    get: ({ get }) => {
        const opts = get(debugAtom);
        return opts.displayDebugComponents;
    },
});

export const enableLogsSelector = selector({
    key: StateKeys.DebugLogging,
    get: ({ get }) => {
        const opts = get(debugAtom);
        return opts.enableLogging;
    },
});
