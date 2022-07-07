import { FC, Suspense } from "react";
import { useSetRecoilState } from "recoil";
import authAtom from "../recoil/atoms/authAtom";
import Button from "./Button";
import ToggleDebugButton from "./debug/ToggleDebugButton";
import { isDev } from "../resources/utils";
import Username from "./Username";

const Header: FC = () => {
    const setIsLoggedIn = useSetRecoilState(authAtom);

    return (
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
            <div
                style={{
                    display: "flex",
                    flexFlow: "row wrap",
                    justifyContent: "flex-start",
                }}
            >
                <Suspense fallback={<div>Loading...</div>}>
                    <Username />
                </Suspense>
                <Button label="Log out" onClick={() => setIsLoggedIn(false)} />
            </div>
        </header>
    );
};

export default Header;
