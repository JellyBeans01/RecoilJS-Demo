import { FC } from "react";
import { useResetRecoilState } from "recoil";
import textAtom from "../recoil/atoms/textAtom";
import Button from "./Button";

const ResetTextInput: FC = () => {
    // We can use the useResetRecoilState() hook to reset the value of textState
    const resetTextState = useResetRecoilState(textAtom);

    return <Button label="Clear input" onClick={resetTextState} />;
};

export default ResetTextInput;
