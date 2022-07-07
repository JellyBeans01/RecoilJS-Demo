import { FC } from "react";
import { useRecoilValue } from "recoil";
import { displayDebugComponentsSelector } from "../../recoil/selectors/debugSelectors";
import DebugObserver from "./DebugObserver";
import DebugButton from "./DebugButton";
// import TimeTravelObserver from "./TimeTravelObserver";
import ToggleDebugLogging from "./ToggleDebugLogging";

const Debug: FC = () => {
    const displayComponents = useRecoilValue(displayDebugComponentsSelector);

    if (!displayComponents) return null;

    return (
        <>
            <DebugButton />
            <ToggleDebugLogging />
            <DebugObserver />
            {/*<TimeTravelObserver />*/}
        </>
    );
};

export default Debug;
