import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import authAtom from "../recoil/atoms/authAtom";
import CharacterCounter from "./CharacterCounter";
import AddTodoItemButton from "./AddTodoItemButton";
import ResetTextInput from "./ResetTextInput";
import TodoList from "./TodoList";
import TodoListFilter from "./TodoListFilter";
import TodoListStats from "./TodoListStats";
import Login from "./Login";
import Header from "./Header";

const AuthSwitch: FC = () => {
    const isLoggedIn = useRecoilValue(authAtom);

    return isLoggedIn ? (
        <>
            <Header />
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
        </>
    ) : (
        <Login />
    );
};

export default AuthSwitch;
