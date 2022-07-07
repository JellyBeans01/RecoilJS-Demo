import { atom } from "recoil";
import { StateKeys, TodoListStateType } from "../../types";

const todoListAtom = atom<TodoListStateType>({
    key: StateKeys.TodoList,
    default: [],
});

export default todoListAtom;
