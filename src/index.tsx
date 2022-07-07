import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import "./css/index.css";
import App from "./ts/App";
import reportWebVitals from "./reportWebVitals";
import ToggleDebugButton from "./ts/components/debug/ToggleDebugButton";
import Debug from "./ts/components/debug/Debug";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <RecoilRoot>
            {process.env.NODE_ENV === "development" && (
                <>
                    <ToggleDebugButton />
                    <Debug />
                </>
            )}
            <App />
        </RecoilRoot>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
