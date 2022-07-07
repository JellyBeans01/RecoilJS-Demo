import { atom } from "recoil";
import { StateKeys, DebugStateType } from "../../types";

const debugAtom = atom<DebugStateType>({
    key: StateKeys.Debug,
    default: {
        displayDebugComponents: false,
        enableLogging: false,
    },
});

export default debugAtom;
