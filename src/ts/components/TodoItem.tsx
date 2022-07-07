import { FC, KeyboardEvent } from "react";
import { useRecoilState } from "recoil";
import { TodoItemType } from "../types";
import Button from "./Button";
import todoListAtom from "../recoil/atoms/todoListAtom";
import { updateItemInList } from "../resources/utils";

type PropsType = {
    item: TodoItemType;
};
const TodoItem: FC<PropsType> = (props) => {
    const { item } = props;

    const [todoList, setTodoList] = useRecoilState(todoListAtom);

    const onEditItem = (evt: KeyboardEvent<HTMLInputElement>): void => {
        const updatedItem: TodoItemType = { ...item, text: evt.target.value };
        const updatedList = updateItemInList(updatedItem, todoList);

        setTodoList(updatedList);
    };

    const toggleItemCompletion = (): void => {
        const updatedItem: TodoItemType = { ...item, isComplete: !item.isComplete };
        const updatedList = updateItemInList(updatedItem, todoList);

        setTodoList(updatedList);
    };

    const onDeleteItem = (): void => {
        const updatedList = todoList.filter((todo) => todo.id !== item.id);
        setTodoList(updatedList);
    };

    return (
        <div>
            <input type="text" value={item.text} onChange={onEditItem} />
            <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />
            <Button label="X" onClick={onDeleteItem} />
        </div>
    );
};

export default TodoItem;
