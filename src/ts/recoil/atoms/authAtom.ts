import { atom } from "recoil";
import { StateKeys } from "../../types";

const authAtom = atom({
    key: StateKeys.Auth,
    default: false,
});

export default authAtom;
