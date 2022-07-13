import { atom } from "recoil";
import { Filter, StateKeys, TodoListFilterStateType } from "../../types";

const todoListFilterAtom = atom<TodoListFilterStateType>({
    key: StateKeys.TodoListFilter,
    default: Filter.ShowAll,
    effects: [
        ({ onSet }) => {
            onSet((newFilter) => {
                // eslint-disable-next-line no-console
                console.info("Setting new filter:", newFilter);
            });
        },
    ],
});

export default todoListFilterAtom;
