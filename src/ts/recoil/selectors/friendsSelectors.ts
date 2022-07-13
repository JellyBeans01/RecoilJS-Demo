import { selectorFamily } from "recoil";
import { StateKeys, UserType } from "../../types";
import endpoints from "../../resources/endpoints";

// Generic: 1st param is ReturnType, 2nd is param type
export const friendsQuerySelector = selectorFamily<UserType[], number>({
    key: StateKeys.Friends,
    get: (userId) => async () => {
        const response = await fetch(endpoints.users);
        const users: UserType[] = await response.json();

        return users.filter(({ id }) => id !== userId);
    },
});
