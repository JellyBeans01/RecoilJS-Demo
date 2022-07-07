import React, { FC } from "react";
import "../css/App.css";
import CharacterCounter from "./components/CharacterCounter";

const App: FC = () => (
    <div className="App">
        <div style={{ margin: "10px 0", fontSize: "24px" }}>Recoil PoC</div>
        <CharacterCounter />
    </div>
);

export default App;
