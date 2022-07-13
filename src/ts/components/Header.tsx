import { FC } from "react";
import ToggleDebugButton from "./debug/ToggleDebugButton";
import { isDev } from "../resources/utils";

const Header: FC = () => (
    <header
        style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            padding: 10,
            backgroundColor: "#DADADA",
        }}
    >
        {isDev() ? <ToggleDebugButton /> : <div />}
    </header>
);

export default Header;
