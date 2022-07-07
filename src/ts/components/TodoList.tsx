import { FC } from "react";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import { filteredTodoListsSelector } from "../recoil/selectors/todoListFilterSelectors";

const TodoList: FC = () => {
    const todoList = useRecoilValue(filteredTodoListsSelector);

    if (!todoList.length) return <p>No todos yet!</p>;

    return (
        <>
            {todoList.map((todo) => (
                <TodoItem key={todo.id} item={todo} />
            ))}
        </>
    );
};

export default TodoList;
