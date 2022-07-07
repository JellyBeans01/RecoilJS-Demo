import { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import debugAtom from "../../recoil/atoms/debugAtom";
import { enableLogsSelector } from "../../recoil/selectors/debugSelectors";
import Button from "../Button";

const ToggleDebugLogging: FC = () => {
    const [debug, setDebug] = useRecoilState(debugAtom);
    const enableLogging = useRecoilValue(enableLogsSelector);

    const onClick = (): void => {
        setDebug({ ...debug, enableLogging: !debug.enableLogging });
    };

    return <Button label={`${enableLogging ? "disable" : "enable"} Logging`} onClick={onClick} />;
};

export default ToggleDebugLogging;
