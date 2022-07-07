import { Filter, TodoItemType } from "./index";

export enum StateKeys {
    CharCount = "charCount",
    Debug = "debug",
    DebugComponents = "debugComponents",
    DebugLogging = "debugLogging",
    FilteredTodoList = "filteredTodoList",
    Text = "text",
    TodoList = "todoList",
    TodoListFilter = "todoListFilter",
    TodoListStats = "todoListStats",
}

export type DebugStateType = {
    displayDebugComponents: boolean;
    enableLogging: boolean;
};

export type TodoListStateType = TodoItemType[];
export type TodoListFilterStateType = Filter;
