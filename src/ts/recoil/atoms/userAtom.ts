import { atom } from "recoil";
import { StateKeys } from "../../types";
import { USER_ID } from "../../resources/constants";

const userAtom = atom({
    key: StateKeys.User,
    default: USER_ID,
});

export default userAtom;
