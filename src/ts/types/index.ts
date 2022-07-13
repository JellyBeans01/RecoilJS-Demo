export enum Filter {
    ShowAll = "Show All",
    ShowCompleted = "Show Completed",
    ShowUncompleted = "Show Uncompleted",
}

export type TodoItemType = {
    id: string;
    text: string;
    isComplete: boolean;
};

export type UserType = { id: number; username: string; name: string; email: string };

export * from "./recoil";
