import { FC } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import textAtom from "../recoil/atoms/textAtom";
import todoListAtom from "../recoil/atoms/todoListAtom";
import Button from "./Button";
import { TodoItemType } from "../types";
import { uuidv4 } from "../resources/utils";

const AddTodoItemButton: FC = () => {
    const todoText = useRecoilValue(textAtom);
    const resetTodoText = useResetRecoilState(textAtom);
    const setTodoList = useSetRecoilState(todoListAtom);

    const createNewTodo = (): TodoItemType => {
        const id = uuidv4();

        return {
            id,
            text: todoText,
            isComplete: false,
        };
    };

    const addTodo = (): void => {
        const newTodo = createNewTodo();

        setTodoList((prevList) => [...prevList, newTodo]);
        resetTodoText();
    };

    return <Button label="Add Todo" onClick={addTodo} disabled={!todoText} />;
};

export default AddTodoItemButton;
