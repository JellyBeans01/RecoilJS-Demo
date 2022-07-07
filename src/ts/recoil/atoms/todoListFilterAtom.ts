import { atom } from "recoil";
import { Filter, StateKeys, TodoListFilterStateType } from "../../types";

const todoListFilterAtom = atom<TodoListFilterStateType>({
    key: StateKeys.TodoListFilter,
    default: Filter.ShowAll,
});

export default todoListFilterAtom;
