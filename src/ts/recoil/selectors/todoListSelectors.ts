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

export const todoListStatsSelector = selector({
    key: StateKeys.TodoListStats,
    get: ({ get }) => {
        const todoList = get(todoListAtom);
        const amount = todoList.length;
        const totalCompleted = todoList.filter((item) => item.isComplete).length;
        const totalUncompleted = amount - totalCompleted;
        const percentDone = (amount === 0 ? 0 : (totalCompleted / amount) * 100).toFixed(2);

        return {
            amount,
            totalCompleted,
            totalUncompleted,
            percentDone,
        };
    },
});
