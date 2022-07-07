import { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import debugAtom from "../../recoil/atoms/debugAtom";
import { displayDebugComponentsSelector } from "../../recoil/selectors/debugSelectors";
import Button from "../Button";

const ToggleDebugButton: FC = () => {
    const [debug, setDebug] = useRecoilState(debugAtom);
    const displayDebugComponents = useRecoilValue(displayDebugComponentsSelector);

    const onClick = (): void => {
        setDebug({ ...debug, displayDebugComponents: !displayDebugComponents });
    };

    return <Button label={`${displayDebugComponents ? "Disable" : "Enable"} Debug Components`} onClick={onClick} />;
};

export default ToggleDebugButton;
