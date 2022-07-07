import React, { FC } from "react";
import "../css/App.css";
import CharacterCounter from "./components/CharacterCounter";
import TodoList from "./components/TodoList";
import ResetTextInput from "./components/ResetTextInput";
import AddTodoItemButton from "./components/AddTodoItemButton";
import TodoListFilter from "./components/TodoListFilter";

const App: FC = () => (
    <div className="App">
        <div style={{ margin: "10px 0", fontSize: "24px" }}>Recoil PoC</div>
        <CharacterCounter />
        <div style={{ marginTop: "15px" }}>
            <AddTodoItemButton />
            <ResetTextInput />
        </div>
        <hr />
        <TodoListFilter />
        <TodoList />
    </div>
);

export default App;
