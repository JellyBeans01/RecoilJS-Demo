import React, { FC } from "react";
import "../css/App.css";
import CharacterCounter from "./components/CharacterCounter";
import TodoList from "./components/TodoList";
import ResetTextInput from "./components/ResetTextInput";
import AddTodoItemButton from "./components/AddTodoItemButton";
import TodoListFilter from "./components/TodoListFilter";
import TodoListStats from "./components/TodoListStats";

const App: FC = () => (
    <div className="App">
        <div style={{ margin: "20px 0", fontSize: 24 }}>Recoil PoC</div>
        <CharacterCounter />
        <div style={{ marginTop: 15 }}>
            <AddTodoItemButton />
            <ResetTextInput />
        </div>
        <hr />
        <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "flex-start", padding: "10px" }}>
            <TodoList />
            <div style={{ flex: 1, border: "1px solid #424242", borderRadius: 8, padding: "20px" }}>
                <TodoListFilter />
                <TodoListStats />
            </div>
        </div>
    </div>
);

export default App;
