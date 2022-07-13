import React, { FC } from "react";
import "../css/App.css";
import Header from "./components/Header";
import CharacterCounter from "./components/CharacterCounter";
import AddTodoItemButton from "./components/AddTodoItemButton";
import ResetTextInput from "./components/ResetTextInput";
import TodoList from "./components/TodoList";
import TodoListFilter from "./components/TodoListFilter";
import TodoListStats from "./components/TodoListStats";
import Friends from "./components/Friends";

const App: FC = () => (
    <div className="App">
        <Header />
        <div style={{ margin: "20px 0", fontSize: 24 }}>Recoil PoC</div>
        <CharacterCounter />
        <div style={{ marginTop: 15 }}>
            <AddTodoItemButton />
            <ResetTextInput />
        </div>
        <hr />
        <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "flex-start", padding: 10 }}>
            <TodoList />
            <div style={{ flex: 1 }}>
                <div style={{ flex: 1, border: "1px solid #424242", borderRadius: 8, padding: 20 }}>
                    <TodoListFilter />
                    <TodoListStats />
                </div>
                <div style={{ flex: 1, border: "1px solid #424242", borderRadius: 8, padding: 20, marginTop: 20 }}>
                    <Friends />
                </div>
            </div>
        </div>
    </div>
);

export default App;
