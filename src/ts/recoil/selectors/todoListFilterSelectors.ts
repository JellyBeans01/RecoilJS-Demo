import { selector } from "recoil";
import { Filter, StateKeys } from "../../types";
import todoListFilterAtom from "../atoms/todoListFilterAtom";
import todoListAtom from "../atoms/todoListAtom";

export const filteredTodoListsSelector = selector({
    key: StateKeys.FilteredTodoList,
    get: ({ get }) => {
        const list = get(todoListAtom);
        const filter = get(todoListFilterAtom);

        switch (filter) {
            case Filter.ShowCompleted:
                return list.filter((item) => item.isComplete);

            case Filter.ShowUncompleted:
                return list.filter((item) => !item.isComplete);

            default:
                return list;
        }
    },
});
