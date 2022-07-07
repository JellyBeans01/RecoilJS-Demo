import { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import debugAtom from "../../recoil/atoms/debugAtom";
import { enableLogsSelector } from "../../recoil/selectors/debugSelectors";

const ToggleDebugLogging: FC = () => {
    const [debug, setDebug] = useRecoilState(debugAtom);
    const enableLogging = useRecoilValue(enableLogsSelector);

    const onClick = (): void => {
        setDebug({ ...debug, enableLogging: !debug.enableLogging });
    };

    return (
        <button type="button" onClick={onClick}>
            {enableLogging ? "disable" : "enable"} Logging
        </button>
    );
};

export default ToggleDebugLogging;
