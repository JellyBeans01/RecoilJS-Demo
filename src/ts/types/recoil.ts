import { Filter, TodoItemType } from "./index";

export enum StateKeys {
    Auth = "auth",
    CharCount = "charCount",
    Debug = "debug",
    DebugComponents = "debugComponents",
    DebugLogging = "debugLogging",
    FilteredTodoList = "filteredTodoList",
    User = "user",
    UserName = "userName",
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
