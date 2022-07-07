import { FC } from "react";
import { useRecoilValue } from "recoil";
import charCountState from "../recoil/selectors/charCountState";
import { MAX_CHAR_COUNT } from "../resources/constants";

const CharacterCount: FC = () => {
    // We can use the useRecoilValue() hook to read the value of charCountState
    const count = useRecoilValue(charCountState);

    return (
        <div style={{ marginLeft: "10px", fontSize: "small", alignSelf: "flex-end" }}>
            Max characters: {count} / {MAX_CHAR_COUNT}
        </div>
    );
};

export default CharacterCount;
