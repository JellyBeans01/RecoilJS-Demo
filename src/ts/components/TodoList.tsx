import { FC } from "react";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import { filteredTodoListsSelector } from "../recoil/selectors/todoListSelectors";

const TodoList: FC = () => {
    const todoList = useRecoilValue(filteredTodoListsSelector);

    return (
        <div style={{ flex: 3 }}>
            {!todoList.length && <p>No todos yet!</p>}
            {todoList.map((todo) => (
                <TodoItem key={todo.id} item={todo} />
            ))}
        </div>
    );
};

export default TodoList;
