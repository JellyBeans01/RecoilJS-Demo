import { atom } from "recoil";
import { StateKeys } from "../../types";

type UserType = { name: string; id: number };
const userAtom = atom<UserType>({
    key: StateKeys.User,
    default: { name: "", id: 0 },
});

export default userAtom;
