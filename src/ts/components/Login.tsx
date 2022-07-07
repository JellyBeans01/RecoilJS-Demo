import React, { FC, useState } from "react";
import { useSetRecoilState } from "recoil";
import Button from "./Button";
import authAtom from "../recoil/atoms/authAtom";

const Login: FC = () => {
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const setIsLoggedIn = useSetRecoilState(authAtom);

    return (
        <div
            style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",
            }}
        >
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexFlow: "column wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50%",
                }}
            >
                <input value={username} placeholder="username" onChange={(evt) => setUsername(evt.target.value)} />
                <input value={password} placeholder="password" onChange={(evt) => setPassword(evt.target.value)} />
                <Button label="Log in" onClick={() => setIsLoggedIn(true)} />
            </div>
        </div>
    );
};

export default Login;
