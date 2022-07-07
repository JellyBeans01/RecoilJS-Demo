import { FC } from "react";
import { useRecoilState } from "recoil";
import debugAtom from "../../recoil/atoms/debugAtom";

const ToggleDebugButton: FC = () => {
    const [debug, setDebug] = useRecoilState(debugAtom);

    const onClick = (): void => {
        setDebug({ ...debug, displayDebugComponents: !debug.displayDebugComponents });
    };

    return (
        <button type="button" onClick={onClick}>
            Toggle Debug Components
        </button>
    );
};

export default ToggleDebugButton;
