import { selectorFamily } from "recoil";
import { StateKeys, UserType } from "../../types";
import endpoints from "../../resources/endpoints";

export const currentUsernameQuerySelector = selectorFamily({
    key: StateKeys.UserName,
    get: (name: string) => async () => {
        try {
            const response = await fetch(endpoints.users);
            const data: UserType[] = await response.json();

            const userData = data.find((obj) => obj.username === name);
            if (!userData) return `${name} (Not found name)`;

            return userData.name;
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error(err);
            return `${name} (Fallback name)`;
        }
    },
});
