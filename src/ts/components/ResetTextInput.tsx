import { FC } from "react";
import { useResetRecoilState } from "recoil";
import textAtom from "../recoil/atoms/textAtom";

const ResetTextInput: FC = () => {
    // We can use the useResetRecoilState() hook to reset the value of textState
    const resetTextState = useResetRecoilState(textAtom);

    return (
        <button type="button" onClick={resetTextState} style={{ cursor: "pointer" }}>
            Clear input
        </button>
    );
};

export default ResetTextInput;
