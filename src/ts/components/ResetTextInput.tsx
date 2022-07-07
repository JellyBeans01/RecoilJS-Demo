import { FC } from "react";
import { useResetRecoilState } from "recoil";
import textState from "../recoil/atoms/textState";

const ResetTextInput: FC = () => {
    // We can use the useResetRecoilState() hook to reset the value of textState
    const resetTextState = useResetRecoilState(textState);

    return (
        <button type="button" onClick={resetTextState} style={{ cursor: "pointer" }}>
            Clear input
        </button>
    );
};

export default ResetTextInput;
